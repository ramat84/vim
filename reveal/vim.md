<!-- Use reveal-md to show this presentation -->

### VIM | Ram Matityahu
# LoVIM . IT!
![RC](vim/mcvim.png)

Note: In this lecture we'll take a technical dive into vim and learn how to work with it

---

### Work from the command line
* VIM - IDE
* TMUX - Window Manager
* Bonus - Other terminal tools 

Note: Vim - not an editor<br>Other tools like lazygit, if we have time

---

# Notes
* github.com/ramat84/vim (vim.md)
* github.com/ramat84/config
* Custom configuration, Stuff may vary
* Colors might be off for you 

Note: Presentation available, Created with vim<br>Configuration for nvim, can be used in vim<br>Custom shortcuts<br>Fix colors with :checkhealth in nvim

---

### Adventages
* Everything is very quick
* Works the same on any OS
* Can be accessed remotely with ease
* Actions are repeatable

Note: Loads Quickly<br>Runs Quickly<br>Don't wait for anything<br>Can do repeatable stuff multiple times fast

---

# Install
* Mac: brew install macvim --override-system-vim
* Linux: apt/pacman/yum [install] gvim
* Windows: Download and install gvim.exe

---

# Basics
* : - Go to vim command mode
* q - quit
* w - write  (save/save as)
* e - open file

---



# Out of the box
## How most of us know vim
* Pretty bare boned and ugly
* No UI elements (numbers, file manager, tabs, etc...)
* No Auto complete
* No Git information

---

# Chalanges
## Learning Curve

![RC](vim/curve.png)

---

# Modal Editor
## Edit before insert
* Normal - Manipulate code, Navigate Files
* Insert - Insert code
* Visual - Work visually with code

---

# Normal Mode
## Steps
* Number - how many times
* Command 

---

# Normal Mode
## Commands
* <kbd>c</kbd> - Change
* <kbd>d</kbd> - Delete 
* <kbd>y</kbd> - Yank (copy)

---

# Normal Mode
## Motions
* <kbd>G</kbd>, <kbd>gg</kbd>, <kbd>^</kbd>, <kbd>$</kbd> - Start/End
* <kbd>f</kbd>, <kbd>t</kbd> - Jump to character 
* <kbd>%</kbd>, <kbd>✱</kbd>, <kbd>⦄</kbd>, - Jump
* <kbd>w</kbd>, <kbd>b</kbd>, <kbd>e</kbd>, <kbd>t</kbd> - Words, Tag
* <kbd>'</kbd>, <kbd>"</kbd> - Parentesis
* <kbd>a</kbd>, <kbd>i</kbd> - All, Inside

---

# Does Well
## Out of the box
* Runs quickly
* Runs everywhere
* Make work more efficient

![RC](vim/well.png)

---

# Versions
* VI - Really Retro (1976)
* VIM - VI Explosion (1991)
* NeoVIM - Vim For Hipsters (2014)

![RC](vim/fork.jpg)

---

# VIM Plugins
* Modular and installed by demend
* Extend functionality
* Efficiency can be monitored

---

# NerdTree
* File Manager
* Bookmarks
* File Manipulation

---

# CoC
* Syntax Autocomplete 
* Jump to definition

---

# FZF
* Open
* History
* Grep

---

# GIT
* Mark Changes
* Blame
* LazyGit
* DiffConflicts 

---

# How do I start
* VIM tutor
* Spacevim

---

# TMUX
* Sessions & attach
* Tabs
* Split Windows
* Copy & Paste

---

# More Resources
* Pimp My Terminal
* Oh My Bash/ZSH
* lsd

---

# Thanks
![RC](vim/vcita_logo.png)


