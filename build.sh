cat vim.md | sed 's/---/[comment]: # (!!!)/g' | sed 's/RC//g' > vim.ms.md
mdslides vim.ms.md
