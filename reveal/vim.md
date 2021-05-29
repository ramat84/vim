<!-- Use reveal-md to show this presentation -->

# LoVim . IT!
### Vim | Ram Matityahu
#### 937.1337
![RC](vim/mcvim.png)

Note: In this lecture we'll take a technical dive into Vim and learn how to work with it<BR>Vim Noob

---

# 🖎 Notes
## All sources are available here
* github.com/ramat84/Vim (Vim.md)
* github.com/ramat84/config

Note: Presentation available, Created with Vim<br>Configuration for NVim, can be used in Vim<br>Custom shortcuts

---

# Versions
* 👴 VI - Really Retro (1976)
* 🤯 Vim - VI Explosion (1991)
* 🧔 NeoVim - Vim For Hipsters (2014)

Note: A bit of history<br>VI - original, simple, not extendable<br>Vim - Extendable with plugins, Much more advanced<br>NVim - improved Vim, does everything Vim does, spitted to make Vim development more mainstream and not block development.

---

# 📦 Out of the box
## How most of us know Vim
* 🦴 Pretty bare boned,  No UI elements
* … No Auto complete
* 🛠 No Git information

```
vim -u NONE
```

Note: vim -U NONE examples/files/jquery.js

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

Note: Loads Quickly<br>Runs Quickly<br>Don't wait for anything<br>Can do repeatable stuff multiple times fast

---

# How to learn Vim
* Tutorial: Vimtutor 
* Game: https://Vim-adventures.com/
* Youtube: Learning Vim in a Week 
* Google: Vim for [MY LANGUAGE]
* Cheat sheets

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

Note: tmux ls<br>tmux attach -t NAME<br>Copy & Paste, No example

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

Note: In windows can be installed from build in linux subsystem<br>For android use hackers keyboard<br>Fix the colors

---

# 🗔 Windows 
* Tabs - Instances
* Buffers - Tabs
* Windows - Panes

Note: Names are confusing 

---

# Basic Work
* <kbd>i</kbd> <kbd>a</kbd> - Insert mode
* <kbd>ESC</kbd> - Normal mode
* <kbd>:</kbd> - Command mode
* <kbd>q</kbd> - Quit
* <kbd>w</kbd> - Write  (Save/Save as)

```
Add to ~/.vimrc for issues with arrow keys in insert mode:
set nocompatible
```

Note: Ask me how to quit Vim<br>Open existing/new file

---

# Sessions
* Save a session
* Load a sessiion

---

# Normal Mode
#### Motions
### Moving Around

* <kbd>k</kbd> <kbd>j</kbd>, <kbd>-</kbd> <kbd>+</kbd> - Up/Down 
* <kbd>h</kbd> <kbd>l</kbd> - Left/Right 
* <kbd>G</kbd> <kbd>gg</kbd> - Start/End of Document
* <kbd>0</kbd> <kbd>^</kbd> <kbd>$</kbd> - Start/End of Line
* <kbd>]</kbd><kbd>m</kbd> <kbd>[</kbd><kbd>m</kbd> - Next/Previous method

Note: Try not to use h/l, I won't go over Visual mode<br>X+, X-, :X

---

# Normal Mode
#### Motions
### Moving Around

* <kbd>w</kbd> <kbd>W</kbd> - word, WORD
* <kbd>b</kbd> <kbd>B</kbd> - back, BACK
* <kbd>e</kbd> <kbd>E</kbd> - End, END
* <kbd>#</kbd> <kbd>✱</kbd> - Same Word
* <kbd>⦃</kbd> <kbd>⦄</kbd> - Paragraphs
* <kbd>(</kbd> <kbd>)</kbd> - Sentences

---

# Normal Mode
#### Motions
### Moving Around

* <kbd>f</kbd> - Find
* <kbd>t</kbd> - Till
* <kbd>/</kbd>, <kbd>n</kbd> <kbd>N</kbd> - Search
* <kbd>s</kbd>, <kbd>,</kbd> <kbd>;</kbd> - Vim sneak, 2 Characters 

Note: Vim sneak is a plugin
---

# Normal Mode
## Go to Insert mode

* <kbd>i</kbd> <kbd>a</kbd> - After/Before Current cursor
* <kbd>I</kbd> <kbd>A</kbd> - Beginning/End Of line
* <kbd>o</kbd> <kbd>O</kbd> - Previous/Next Line

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
[Count+Operator] [Motions/Objects]
Delete 5 Words
Y a Paragraph
2 (lines) Yank 
Ident inside Bracket
```

Note: yy and dd for full rows

---

# More Text Objects
* https://github.com/kana/Vim-textobj-user/wiki

---

# Macros
* <kbd>q</kbd> qX - Record a macro
* <kbd>@</kbd> @X - Repeat a macro
* <kbd>.</kbd> - Macro repeater plugin 

---

# Key mappings
* Leader key
* Mapping a key 

---

# Vim Plugins
* Modular and installed by demend
* Extend functionality
* Efficiency can be monitored
* "Marketplace"
* Installation
* Removal

---

# Vim Plugins
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


