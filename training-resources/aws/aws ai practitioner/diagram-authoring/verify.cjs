/* Rendered geometry checks for the actual diagram defects reported in review. */
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const root = path.resolve(__dirname, '../../../..');
const destination = process.env.AIF_REVIEW_DIR || '/tmp/aif-art-review';
const course = require(path.join(root, 'training-website/courses/aif/aif_data.js'));
const slides = course.modules.flatMap(m => m.slides).filter(s => s.visualization);

async function geometry(page) {
  return page.evaluate(() => {
    const problems = [];
    if (!document.fonts.check('700 20px Diagram')) problems.push('Embedded bold font not loaded');
    if (document.querySelector('text[font-weight="500"]') && !document.fonts.check('500 20px Diagram')) problems.push('Embedded body font not loaded');
    const intersects = (a, b, pad = 0) => a.x < b.right + pad && a.right > b.x - pad && a.y < b.bottom + pad && a.bottom > b.y - pad;
    const inside = (p, b, pad = 0) => p.x > b.x - pad && p.x < b.right + pad && p.y > b.y - pad && p.y < b.bottom + pad;
    const texts = [...document.querySelectorAll('text')].map(e => ({e, label: e.textContent, b: e.getBoundingClientRect()}));
    const icons = [...document.querySelectorAll('.diagram-icon')].map(e => ({e, b: e.getBoundingClientRect()}));
    const containers = [...document.querySelectorAll('.text-container')].map(e => e.getBoundingClientRect());
    for (const {e, label, b} of texts) {
      if (Number(e.getAttribute('font-size')) < 16) problems.push(`Type below 16px: ${label}`);
      if (b.x < 8 || b.y < 8 || b.right > 792 || b.bottom > 442) problems.push(`Canvas overflow: ${label}`);
      const center = {x: (b.x+b.right)/2, y: (b.y+b.bottom)/2};
      const boxes = containers.filter(r => inside(center, r)).sort((a,b) => a.width*a.height-b.width*b.height);
      const box = boxes[0];
      if (box && (b.x<box.x+7.5 || b.right>box.right-7.5 || b.y<box.y+7.5 || b.bottom>box.bottom-7.5)) problems.push(`Container padding: ${label}`);
      for (const r of containers) if (intersects(b,r) && !inside(center,r)) problems.push(`Container border crosses text: ${label}`);
    }
    for (let i=0;i<texts.length;i++) for(let j=i+1;j<texts.length;j++) if(intersects(texts[i].b,texts[j].b)) problems.push(`Text overlap: ${texts[i].label} / ${texts[j].label}`);
    for(const {b} of icons) for(const t of texts) if(intersects(b,t.b,1)) problems.push(`Icon/text collision: ${t.label}`);
    for (const e of document.querySelectorAll('.connector')) {
      const len=e.getTotalLength();
      const padding=Number(e.getAttribute('stroke-width'))/2+2;
      for(const t of texts) {
        for(let distance=0;distance<=len;distance+=1) if(inside(e.getPointAtLength(distance),t.b,padding)) { problems.push(`Connector clearance: ${t.label}`); break; }
      }
      for(const {e:icon,b} of icons) {
        for(let distance=0;distance<=len;distance+=2) if(inside(e.getPointAtLength(distance),b,2)) { problems.push(`Connector crosses icon: ${icon.getAttribute('data-aws') || 'illustration'}`); break; }
      }
      if (e.hasAttribute('marker-end') && len>0) {
        const end=e.getPointAtLength(len), near=e.getPointAtLength(Math.max(0,len-1));
        const dx=end.x-near.x,dy=end.y-near.y,mag=Math.hypot(dx,dy),ux=dx/mag,uy=dy/mag;
        // Sample the filled arrowhead, including its 1px tip extension beyond the path.
        for(const t of texts) {
          let collision=false;
          for(let back=-1;back<=11;back+=1) for(let side=-(back+1)/2;side<=(back+1)/2;side+=1) {
            const point={x:end.x-back*ux-side*uy,y:end.y-back*uy+side*ux};
            if(inside(point,t.b,1)) collision=true;
          }
          if(collision) problems.push(`Arrowhead/text collision: ${t.label}`);
        }
      }
    }
    return [...new Set(problems)];
  });
}

(async () => {
  fs.mkdirSync(destination,{recursive:true});
  const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
  try {
    const page=await browser.newPage({viewport:{width:800,height:450}});
    const failures=[];
    for(const slide of slides) {
      await page.goto('file://'+path.join(root,'training-website/courses/aif/visualizations',slide.visualization));
      await page.evaluate(()=>document.fonts.ready);
      const errors=await geometry(page);
      if(errors.length) failures.push({slide:slide.id,errors});
      await page.screenshot({path:path.join(destination,slide.id+'.png')});
    }
    // Eight diagrams per sheet, retained at their full 800×450 display size.
    await page.setViewportSize({width:1600,height:1800});
    for(let i=0;i<slides.length;i+=8) {
      const html='<body style="margin:0;background:white;display:grid;grid-template-columns:repeat(2,800px)">'+slides.slice(i,i+8).map(s=>`<img width="800" height="450" src="file://${path.join(root,'training-website/courses/aif/visualizations',s.visualization)}">`).join('')+'</body>';
      fs.writeFileSync(path.join(destination,'sheet.html'),html);
      await page.goto('file://'+path.join(destination,'sheet.html'));
      await page.evaluate(async()=>Promise.all([...document.images].map(i=>i.decode())));
      await page.screenshot({path:path.join(destination,`sheet-${i/8+1}.png`)});
    }
    fs.writeFileSync(path.join(destination,'geometry.json'),JSON.stringify(failures,null,2)+'\n');
    console.log(JSON.stringify(failures,null,2));
    console.log(`${slides.length} rendered; ${failures.length} diagrams with geometry issues.`);
    assert.equal(failures.length,0,'Fix all rendered geometry issues before publishing.');
  } finally { await browser.close(); }
})().catch(error=>{ console.error(error.message); process.exitCode=1; });
