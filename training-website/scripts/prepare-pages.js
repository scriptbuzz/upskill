// Copy the website for Pages without changing its URLs.
const fs = require("node:fs");
const path = require("node:path");
const { ROOT } = require("./course-tools.js");

function preparePages(source, output) {
  source = path.resolve(source);
  output = path.resolve(output);
  if (output === source || output.startsWith(source + path.sep) || fs.existsSync(output)) {
    throw new Error("Output must be a new directory outside the source tree");
  }
  fs.cpSync(source, output, { recursive: true, filter: file => file !== path.join(source, "scripts") });
}

if (require.main === module) {
  const [output] = process.argv.slice(2);
  if (!output) throw new Error("Usage: node prepare-pages.js OUTPUT");
  preparePages(ROOT, output);
  console.log(`Prepared Pages artifact at ${output}`);
}
module.exports = { preparePages };
