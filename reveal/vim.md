<!-- Use reveal-md to show this presentation -->

# LoVim . IT!
### Vim | Ram Matityahu
#### v1.337
![RC](vim/mcvim.png)
##### Vim is a editor that can be
##### extended to work as a IDE

Note: In this lecture we'll take a technical dive into Vim and learn how to work with it\
Bare with me\
My last lecture: JLC in 2005\
I used kate editor\
I Switched to Terminal half a year ago

---

# History
* 👴 VI - Really Retro (1976)
* 🤯 Vim - VI Explosion (1991)
* 🧔 NeoVim - Vim For Hipsters (2014)

Note: A bit of history\
VI - original, simple, not extendable\
Vim - Extendable with plugins, Much more advanced\
NVim - improved Vim, does everything Vim does, spitted to make Vim development more mainstream and not block development.

---

# 📦 Out of the box
## How most of us know Vim
* 🦴 Pretty bare boned,  No UI elements
* … No Auto complete
* 🛠 No Git information

```
vim -u NONE
```

Note: 'vim' -U NONE jquery.js

---

# Learning Curve

![RC](vim/curve.png)

---

# ✔ Adventages
* ⚡ Everything is very quick
* 💻 Works the same on any OS
* 🚪 Can be accessed remotely with ease
* ➿ Actions are repeatable
* 🕔 Make work more efficient
* ⚙ Vim mode exists in most modern IDEs

Note: Loads Quickly\
Runs Quickly\
Don't wait for anything\
Can do repeatable stuff multiple times fast

---

# How to learn Vim
* Tutorial: Vimtutor 
* Game: https://Vim-adventures.com/
* Youtube: Learning Vim in a Week 
* Google: Vim for [MY LANGUAGE]
* Search for Cheat sheets or Vim wallpapers

Notes: You can find links to the cheatsheets in the presentation

<!-- 
Cheat sheets:
    My Cheat sheets:
    https://github.com/ramat84/vim/tree/master/cheatsheets

    Others:
    https://cdn.shopify.com/s/files/1/0165/4168/files/preview.png 
-->

---

# 🤔 Know Before beginning
* 🍺 It's free (as a beer)
* 🤖 It's different
* ⌨ It's a keyboard thing

Note: Vim is nothing like you ever used before

---

# 🖵 TMUX
* Sessions & attach
* Tabs
* Split Windows

Note: tmux ls\
tmux attach -t NAME\
Copy & Paste, No example

---

# Installtion
* 🍎 Mac: brew install macVim --override-system-Vim
* 🐧 Linux: apt install gVim
* 🪟 Windows: gVim.exe
* 🤖 Android: Use Termux Linux terminal

```
On mac use iTerm2!
🎨 And setup the colors: https://jdhao.github.io/2018/10/19/tmux_NVim_true_color/
```

Note: In windows can be installed from build in linux subsystem\
For android use hackers keyboard\
Fix the colors

---

# My UI tour
* Tmux on top
* Buffers line
* Code Area, Signs, Numbers, Files, Tags
* Vim Bottom

---

# Basic Work
* <kbd>:</kbd> - Command mode
* <kbd>q</kbd> - Quit
* <kbd>w</kbd> - Write  (Save/Save as)

* <kbd>i</kbd> <kbd>a</kbd> - Insert mode
* <kbd>ESC</kbd> - Normal mode

```
Add to ~/.vimrc for issues with arrow keys in insert mode:
set nocompatible
```

Note: Ask me how to quit Vim\
Open existing/new file

---

# Normal Mode
#### Motions
### Moving Around

* <kbd>gg</kbd> <kbd>G</kbd> - Start/End of Document
* <kbd>k</kbd> <kbd>j</kbd>, <kbd>-</kbd> <kbd>+</kbd> - Up/Down 
* <kbd>h</kbd> <kbd>l</kbd> - Left/Right 
* <kbd>0</kbd> <kbd>^</kbd>/<kbd>_</kbd> <kbd>$</kbd> - Start/End of Line
* <kbd>]</kbd><kbd>m</kbd> <kbd>[</kbd><kbd>m</kbd> - Next/Previous method
* <kbd>%</kbd> - Go to the opening/closing bracket 

Note: Try not to use h/l, I won't go over Visual mode\
X+, X-, :X

---

# Normal Mode
#### Motions
### Moving Around

* <kbd>w</kbd> <kbd>W</kbd> - word, WORD
* <kbd>b</kbd> <kbd>B</kbd> - back, BACK
* <kbd>e</kbd> <kbd>E</kbd> - End, END
* <kbd>#</kbd> <kbd>✱</kbd> - Same Word
* <kbd>⦃</kbd> <kbd>⦄</kbd> - Paragraphs

---

# Normal Mode
#### Motions
### Moving Around

* <kbd>f</kbd> , <kbd>,</kbd> <kbd>;</kbd> - Find
* <kbd>t</kbd> - Till
* <kbd>/</kbd>, <kbd>n</kbd> <kbd>N</kbd> - Search
* <kbd>s</kbd>, <kbd>,</kbd> <kbd>;</kbd> - Vim sneak, 2 Characters 

Note: Find/Till will search the current line, there's a plugin for multi line search\
Vim sneak is a plugin

---

# Normal Mode
| Operators                          | Text Objects          |
| ---------------------------------- | --------------------- |
| <kbd>c</kbd> Change                         | <kbd>a</kbd> <kbd>i</kbd> a, in a       |
| <kbd>d</kbd> Delete, dd - full row          | <kbd>w</kbd> <kbd>W</kbd> word/WORD     |
| <kbd>y</kbd> Yank (copy), yy - full row     | <kbd>p</kbd> Paragraph         |
| <kbd>gU</kbd> <kbd>gu</kbd> Go Uppercase/Lowercase   | <kbd>⦃</kbd> Bracket           |
| <kbd>＜</kbd> <kbd>＞</kbd> Ident left/right         | <kbd>'</kbd> <kbd>"</kbd> Parenthesis   |

```
https://github.com/ramat84
Open vim => examples.js

More objects: https://github.com/kana/Vim-textobj-user/wiki
```

Note: yy and dd for full rows

---

# Macros
* <kbd>q</kbd> qX - Record a macro
* <kbd>@</kbd> @X - Repeat a macro
* <kbd>.</kbd> - Macro repeater plugin 

```
https://github.com/ramat84
Open vim => macros.js
```

---

# Vim Plugins
* Modular and installed by demend
* Extend functionality
* Efficiency can be monitored
* "Marketplace"
* My plugins really quick

```
https://github.com/junegunn/vim-plug
```

---

# Vim Plugins
* NerdTree
* FZF
* CoC
Note: Quick, NerdTree: File Manager, Bookmarks, File Manipulation\
Coc: Syntax Autocomplete, Jump to definition,History, Grep

---

# GIT
* Mark Changes
* Blame
* LazyGit
* DiffConflicts 

---

# Vimium C
* Extension to use Vim key in your browser

---

# 🖎 Notes
## All sources are available here
* github.com/ramat84/Vim (Vim.md)
* github.com/ramat84/config

Note: Presentation available, Created with Vim\
Configuration for NVim, can be used in Vim\
Custom shortcuts

---

# Thanks
![RC](vim/vcita_logo_300.png)


