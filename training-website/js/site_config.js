// Single source of truth for the company name used in JS-rendered UI
// (login modal, PDF export cover). Static <title>/<meta>/og: tags in each
// HTML file's <head> must stay as literal text — crawlers and social-share
// scrapers read raw HTML and don't execute this script, so those tags can't
// be templated from here without breaking page titles and link previews.
window.SITE_NAME = "Four Points Technology (Internal Use Only)";
