<!-- Use reveal-md to show this presentation -->

### vim | Ram Matityahu
# Lovim . IT!
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
* {i} - Insert mode
* {ESC} - Normal mode
* {:} - Command mode
* {e} - Open file
* {q} - Quit
* {w} - Write  (Save/Save as)

Note: Ask me how to quit vim<br>Open existing/new file

---

# Normal Mode
#### Motions
### Moving Around

* {k} {j}, {-} {+} - Up/Down 
* {h} {l} - Left/Right 
* {G} {gg} - Start/End of Document
* {^} {$} - Start/End of Line

Note: Try not to use h/l, I won't go over Visual mode<br>X+, X-, :X, :+X, :-X

---

# Normal Mode
#### Motions
### Moving Around

* {w} {W} - word, WORD
* {b} {B} - back, BACK
* {e} {E} - End, END
* {#} {✱} - Same Word
* {⦃} {⦄} - Paragraphs

---

# Normal Mode
#### Motions
### Moving Around

* {f} {F} {t} {T} - Find
* {t} {T} - Till
* {s} - Vim sneak, 2 Characters 

Note: Vim sneak is a plugin
---

# Normal Mode
## Go to Insert mode

* {i} {a} - After/Before Current cursor
* {I} {A} - Beginning/End Of line
* {o} {O} - Previous/Next Line

---

# Normal Mode
| Operators                          | Objects               |
| ---------------------------------- | --------------------- |
| {c} Change                         | {a} {i} a, in a       |
| {d} Delete                         | {w} {W} word/WORD     |
| {y} Yank (copy)                    | {p} Paragraph         |
| {gU} {gu} Go Uppercase/Lowercase   | {b} Bracket           |
| {＜} {＞} Tab left/right           | {'} {"} Parenthesis   |

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


