<!-- Use reveal-md to show this presentation -->

# Lovim . IT!
### vim | Ram Matityahu
#### 937.1337
![RC](vim/mcvim.png)

Note: In this lecture we'll take a technical dive into vim and learn how to work with it<BR>vim Noob

---

# 🖎 Notes
## All sources are available here
* github.com/ramat84/vim (vim.md)
* github.com/ramat84/config

Note: Presentation available, Created with vim<br>Configuration for Nvim, can be used in vim<br>Custom shortcuts

---

# Versions
* 👴 VI - Really Retro (1976)
* 🤯 vim - VI Explosion (1991)
* 🧔 Neovim - Vim For Hipsters (2014)

Note: A bit of history<br>VI - original, simple, not extendable<br>vim - Extendable with plugins, Much more advanced<br>Nvim - improved vim, does everything vim does, spitted to make vim development more mainstream and not block development.

---

# 📦 Out of the box
## How most of us know vim
* 🦴 Pretty bare boned,  No UI elements
* … No Auto complete
* 🛠 No Git information

Note: Open examples/bare.sh<br>Show presentation

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

# How to learn vim
* Tutorial: vimtutor 
* Game: https://vim-adventures.com/
* Youtube: Learning Vim in a Week 
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
* 🍎 Mac: brew install macvim --override-system-vim
* 🐧 Linux: apt install gvim
* 🪟 Windows: gvim.exe
* 🤖 Android: Use Termux Linux terminal

```
On mac use iTerm2!
🎨 And setup the colors: https://jdhao.github.io/2018/10/19/tmux_Nvim_true_color/
```

Note: In windows can be installed from build in linux subsystem<br>For android use hackers keyboard<br>Fix the colors

---

# 🗔 Windows 
* Tabs - Sessions
* Buffers - Tabs
* Windows - Panes

Note: Names are confusing 

---

# Basic Work
* <kbd>i</kbd> - Insert mode
* <kbd>ESC</kbd> - Normal mode
* <kbd>:</kbd> - Command mode
* <kbd>e</kbd> - Open file
* <kbd>q</kbd> - Quit
* <kbd>w</kbd> - Write  (Save/Save as)

Note: Ask me how to quit vim<br>Open existing/new file

---

# Normal Mode
#### Motions
### Moving Around

* <kbd>k</kbd> <kbd>j</kbd>, <kbd>-</kbd> <kbd>+</kbd> - Up/Down 
* <kbd>h</kbd> <kbd>l</kbd> - Left/Right 
* <kbd>G</kbd> <kbd>gg</kbd> - Start/End of Document
* <kbd>^</kbd> <kbd>$</kbd> - Start/End of Line

Note: Try not to use h/l, I won't go over Visual mode<br>X+, X-, :X, :+X, :-X

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

* <kbd>f</kbd> <kbd>F</kbd> <kbd>t</kbd> <kbd>T</kbd> - Find
* <kbd>t</kbd> <kbd>T</kbd> - Till
* <kbd>s</kbd> - Vim sneak, 2 Characters 

Note: Vim sneak is a plugin
---

# Normal Mode
## Go to Insert mode

* <kbd>i</kbd> <kbd>a</kbd> - After/Before Current cursor
* <kbd>I</kbd> <kbd>A</kbd> - Beginning/End Of line
* <kbd>o</kbd> <kbd>O</kbd> - Previous/Next Line

---

# Normal Mode
| Operators                          | Objects               |
| ---------------------------------- | --------------------- |
| <kbd>c</kbd> Change                         | <kbd>a</kbd> <kbd>i</kbd> a, in a       |
| <kbd>d</kbd> Delete                         | <kbd>w</kbd> <kbd>W</kbd> word/WORD     |
| <kbd>y</kbd> Yank (copy)                    | <kbd>p</kbd> Paragraph         |
| <kbd>gU</kbd> <kbd>gu</kbd> Go Uppercase/Lowercase   | <kbd>b</kbd> Bracket           |
| <kbd>＜</kbd> <kbd>＞</kbd> Tab left/right           | <kbd>'</kbd> <kbd>"</kbd> Parenthesis   |

```
[Count+Operator] [Motions/Objects]
5       y          +
3       d          w
y       5          +
d       3          w
```

---

# Sessions
* Save a session
* Load a sessiion

---

# Macros
* Record a macro
* Repeat a macro

---

# Key mappings
* Leader key
* Mapping a key 

---

# vim Plugins
* Modular and installed by demend
* Extend functionality
* Efficiency can be monitored
* "Marketplace"
* Installation
* Removal

---

# vim Plugins
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


