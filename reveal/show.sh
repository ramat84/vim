#!/bin/bash
cat ../vim.md | sed 's/{/<kbd>/g' | sed 's/}/<\/kbd>/g' > vim.md
./node_modules/reveal-md/bin/reveal-md.js vim.md --theme league --css kbd.css

