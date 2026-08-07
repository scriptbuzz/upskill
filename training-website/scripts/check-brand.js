#!/usr/bin/env node
// Verifies every static occurrence of the company name across the site's
// HTML <head> tags and header logo matches js/site_config.js — the single
// source of truth. These occurrences must stay literal HTML (title, meta
// author, og:site_name, og:title, and the logo link) because social-share
// scrapers and search crawlers read raw markup and never execute JS, so
// they can't be templated from a runtime variable. Run this after editing
// SITE_NAME and manually updating the files below, to catch anything missed.
//
// Usage: node training-website/scripts/check-brand.js

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");

const configSrc = fs.readFileSync(path.join(ROOT, "js/site_config.js"), "utf8");
const match = configSrc.match(/window\.SITE_NAME\s*=\s*"([^"]+)"/);
if (!match) {
  console.error("Could not find window.SITE_NAME in js/site_config.js");
  process.exit(1);
}
const SITE_NAME = match[1];

// file -> which checks apply: 'author' and/or 'ogSiteName' (exact match),
// 'titlePrefix' and/or 'ogTitlePrefix' (must start with SITE_NAME), 'logo' (exact match)
const FILES = {
  "index.html": ["author", "ogSiteName", "titlePrefix", "ogTitlePrefix", "logo"],
  "courses/clf/index.html": ["author", "ogSiteName", "logo"],
  "courses/clf/viewer.html": ["author", "ogSiteName", "logo"],
  "courses/clf/export.html": ["author"],
  "courses/aif/index.html": ["author", "ogSiteName", "logo"],
  "courses/aif/viewer.html": ["author", "ogSiteName", "logo"],
  "courses/aif/export.html": ["author"],
};

const CHECKS = {
  author: {
    regex: /<meta name="author" content="([^"]*)">/,
    mode: "exact",
  },
  ogSiteName: {
    regex: /<meta property="og:site_name" content="([^"]*)">/,
    mode: "exact",
  },
  titlePrefix: {
    regex: /<title>([^<]*)<\/title>/,
    mode: "prefix",
  },
  ogTitlePrefix: {
    regex: /<meta property="og:title" content="([^"]*)">/,
    mode: "prefix",
  },
  logo: {
    regex: /id="home-logo-link">([^<]*)<\/a>/,
    mode: "exact",
  },
};

let failures = 0;

for (const [file, checks] of Object.entries(FILES)) {
  const fullPath = path.join(ROOT, file);
  const src = fs.readFileSync(fullPath, "utf8");

  for (const checkName of checks) {
    const { regex, mode } = CHECKS[checkName];
    const m = src.match(regex);
    if (!m) {
      console.error(`[MISSING] ${file}: ${checkName} tag not found`);
      failures++;
      continue;
    }
    const ok = mode === "exact" ? m[1] === SITE_NAME : m[1].startsWith(SITE_NAME);
    if (!ok) {
      console.error(`[MISMATCH] ${file}: ${checkName} = "${m[1]}" (expected ${mode} "${SITE_NAME}")`);
      failures++;
    }
  }
}

if (failures === 0) {
  console.log(`OK — all static brand references match SITE_NAME ("${SITE_NAME}")`);
  process.exit(0);
} else {
  console.error(`\n${failures} mismatch(es) found.`);
  process.exit(1);
}
