#!/bin/bash
# Please run npm install before running this
# When opened use "s" for speaker mode

cat ../vim.md | sed 's/{/<kbd>/g' | sed 's/}/<\/kbd>/g' > vim.md
{ sleep 1; chromium --app=http://localhost:1948/vim.md; } &
./node_modules/reveal-md/bin/reveal-md.js vim.md --theme league --css add.css --disable-auto-open


