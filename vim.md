<!-- Use reveal-md to show this presentation -->

### VIM | Ram Matityahu
# LoVIM . IT!
![RC](vim/mcvim.png)

Note: In this lecture we'll take a technical dive into VIM and learn how to work with it

---

# Notes
## All sources are available here
* github.com/ramat84/vim (vim.md)
* github.com/ramat84/config

Note: Presentation available, Created with VIM<br>Configuration for nvim, can be used in VIM<br>Custom shortcuts<br>Fix colors with :checkhealth in nvim

---

# Adventages
* Everything is very quick
* Works the same on any OS
* Can be accessed remotely with ease
* Actions are repeatable
* Make work more efficient

![RC](vim/well.png)

Note: Loads Quickly<br>Runs Quickly<br>Don't wait for anything<br>Can do repeatable stuff multiple times fast

---

# How to learn VIM
* Tutorial: vimtutor 
* Game: https://vim-adventures.com/
* Youtube: Learning Vim in a Week 
* Cheat sheets

<!-- 
Cheat sheets:
    My Cheat sheets:
    

    Others:
    https://cdn.shopify.com/s/files/1/0165/4168/files/preview.png 
-->

---

# Work from the command line
* VIM - IDE
* TMUX - Window Manager

Note: Vim - not an editor<br>Other tools like lazygit, if we have time

---

# Versions
* VI - Really Retro (1976)
* VIM - VI Explosion (1991)
* NeoVIM - Vim For Hipsters (2014)

![RC](vim/fork.jpg)

---

# Know Before beginning
* It's free (as a beer)
* VIM is different
* Switch from Mouse to keyboard

Note: Vim is nothing like you ever used before

---

# Installtion
* Mac: brew install macvim --override-system-vim
* Linux: apt/pacman/yum [install] gvim
* Windows: Download and install gvim.exe
* Android: In Termux app, "apt install vim"
* https://jdhao.github.io/2018/10/19/tmux_nvim_true_color/

Note: In windows can be installed from build in linux subsystem<br>For android use hackers keyboard<br>Fix the colors

---

# TMUX
* Sessions & attach
* Tabs
* Split Windows

Note: tmux ls<br>tmux attach -t NAME<br>Copy & Paste, No example

---

# Windows 
* Tabs
* Buffers
* Windows

---

# Basic Work
* {i} - Insert mode
* {ESC} - Normal mode
* {:} - Command mode
* {e} - Open file
* {q} - Quit
* {w} - Write  (Save/Save as)

Note: Ask me how to quit VIM<br>Open existing/new file

---

# Out of the box
## How most of us know VIM
* Pretty bare boned,  No UI elements
* No Auto complete
* No Git information

---

# Chalanges
## Learning Curve

![RC](vim/curve.png)

---

# Normal Mode
## Motions
### Basics

* {k}, {j} {-}, {+} - Up/Down 
* {h} {l} - Left/Right 
* {G}, {gg} - Start/End of Document
* {^}, {$} - Start/End of Line

Note: Try not to use h/l

---

# Normal Mode
## Motions
### Basics

* {f} {F} {t} {T} - Find
* {t}{T}, Till
* {sXX} - Vim sneak (plugin)

---

# Normal Mode
## Motions
### Basics
* {w} {W} - word, WORD
* {b} {B} - back, BACK
* {e} {E} - End, END
* {#} {✱} - Same Word

---

# Normal Mode
## Motions
### Basics
* {⦃}, {⦄} - Paragraphs
* {'}, {"} - Parenthesis

---

# Normal Mode
## Operators
* {c} - Change
* {d} - Delete 
* {y} - Yank (copy)
* {gU} {gu} - Go Uppercase/Lowercase
* {＜} {＞} - Tab left/right

---

# Normal Mode
## Objects
* {a} - a / {i} - inner
* {w} {W} - word/WORD
* {p} - Paragraph
* {b} - Bracket
 
---

# Normal Mode
## Steps
### Use one of two formats

* [Count] [Operator] [Motions/Objects]
* 5       y          +
* 3       d          w

* [Operator] [Count] [Motions/Objects]
* y       5          +
* d       3          w

---

# Sessions

---

# Macros
* Record a macro
* Repeat a macro

---

# Key mappings

---

# VIM Plugins
* Modular and installed by demend
* Extend functionality
* Efficiency can be monitored
* "Marketplace"
* Installation
* Removal

---

# VIM Plugins
* NerdTree
* FZF
* CoC
Note: NerdTree: File Manager, Bookmarks, File Manipulation<BR>Coc: Syntax Autocomplete, Jump to definition,History, Grep

---

# GIT
* Mark Changes
* Blame
* LazyGit
* DiffConflicts 

---

# Database
* MitzaSQL


---

# Terminal
* Oh My Bash/ZSH
* lsd

Note: bm Bookmarks

---

# Thanks
![RC](vim/vcita_logo.png)


