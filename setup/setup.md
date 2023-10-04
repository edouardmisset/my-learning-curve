# My setup

## Intro

This is a small file to show you what my setup looks like. 😀

## Quote

> Fix the things you repeat everyday. They constitute 50% of your life.
>
> **Jordan Peterson**

[Watch the video](https://www.youtube.com/watch?v=7GmD_cCHfiE)

## Summary

1. [GitHub](#Github)
2. [VS Code](#VS-Code)
3. [Terminal](#Terminal)

## GitHub

### GitHub Template

In the repo you want to make into a template go to `Settings` > `Options` > `Settings`.
Activate the [ ] Template repository checkbox

### GitHub Page

In your new repo go to `Settings` > `Options` > `GitHub Pages`.
Activate it by choosing which branch to publish (ie. `Main`).
Copy the `url` newly displayed in the `GitHub Pages` section.
Paste it in the `About` > `Website` of your project's main page (Code).

## VS Code

### Font: [Fira Code](https://github.com/tonsky/FiraCode)

> Fira Code is a free monospaced font containing ligatures for common programming multi-character combinations. This is just a font rendering feature: underlying code remains ASCII-compatible. This helps to read and understand code faster. For some frequent sequences like .. or //, ligatures allow us to correct spacing.
>
> **Fira Code**

You can download it from [here](https://github.com/tonsky/FiraCode/wiki/Installing)
To use it in `VS Code`, follow [these explanations](https://github.com/tonsky/FiraCode/wiki/VS-Code-Instructions)

**TL;DR**:
Add this to your VS Code `settings.JSON`:

```JSON
"editor.fontFamily": "Fira Code",
"editor.fontLigatures": true,
```

**Bonus**: you can setup the same font (and its `ligatures`) in your Terminal to get the additional goodness. You should do it before running the `PowerLevel10k` configuration.

### Extensions

#### All around

- AI assistant (copilot, IntelliCode, TabNine,...)
- Better Comments
- Code Spell Checker
- Conventional Commits
- ESLint
- Folder Templates
- indent-rainbow
- Live Server
- Live Share
- Path Intellisense
- Prettier
- Restore Terminals
- Rewrap

#### HTML

- Auto Rename Tag
- htmltagwrap

#### CSS

- CSS Peek
- (Tailwind CSS IntelliSense)
- (vscode-styled-components)

#### JS

- BabelJavaScript
- JavaScript (ES6) code snippets
- Quokka.js
- JS Refactoring Assistant (P42 v1.165.2)
- Document This

#### TypeScript

- Pretty TypeScript Errors

#### React

- ES7 React/Reduc/GraphQL/React-Native Snippets

#### Markdown

- Markdown All in One

#### Shell

- shell-format
- Git Lens

#### Node

- REST Client
- npm Intellisense

#### Deno

- Deno

#### Bun

- Bun for Visual Studio Code

#### Git

- Git Graph
- Git Lens

#### Customization

- Material Icon Theme
- One Dark Pro

### Settings

Here are some VS Code Settings.
Only copy the line you **understand** and **want** to use.

```JSON
{
  "diffEditor.codeLens": true,
  "docthis.includeDateTag": true,
  "docthis.includeDescriptionTag": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.fontFamily": "FiraCode-Retina",
  "editor.fontLigatures": true,
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.minimap.enabled": false,
  "editor.tabSize": 2,
  "emmet.triggerExpansionOnTab": true,
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 10000,
  "git.confirmSync": false,
  "telemetry.enableCrashReporter": false,
  "telemetry.enableTelemetry": false,
  "terminal.external.osxExec": "iTerm.app",
  "terminal.integrated.cursorStyle": "line",
  "workbench.colorTheme": "One Dark Pro",
  "workbench.iconTheme": "material-icon-theme",
  "auto-rename-tag.activationOnLanguage": ["html", "jsx", "tsx", "xml", "php"],
  "breadcrumbs.enabled": false,
  "editor.linkedEditing": true,
  "editor.suggestSelection": "first", // or recentlyUserByPrefix
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  "git.autofetch": true,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "json.format.enable": true,
  "liveshare.authenticationProvider": "GitHub",
  "oneDarkPro.editorTheme": "oneDarkPro",
  "prettier.arrowParens": "avoid",
  "prettier.jsxSingleQuote": true,
  "prettier.singleQuote": true,
  "terminal.integrated.fontFamily": "MesloLGS NF",
  "terminal.integrated.fontSize": 13,
  "terminal.integrated.macOptionIsMeta": true,
  "terminal.integrated.sendKeybindingsToShell": true,
  "terminal.integrated.shell.osx": "/bin/zsh",
  "workbench.preferredDarkColorTheme": "One Dark Pro",
  "workbench.sideBar.location": "right",
  "[json]": {
    "editor.quickSuggestions": {
      "strings": true
    },
    "editor.suggest.insertMode": "replace",
    "gitlens.codeLens.scopes": ["document"]
  }
}
```

For a more thorough setup see the `settings.json` file.

## Package manager: [Homebrew](https://brew.sh)

> The Missing Package Manager for macOS
>
> **Homebrew**

To install `brew`: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

## Terminal: [iTerm2](https://iterm2.com)

> iTerm2 is a replacement for Terminal
>
> **iTerm2**

To install it using `brew`: `brew install iterm2`

### Shell: [ZSH](https://www.zsh.org)

If it is not _already_ installed on you system, [install](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH) it.

### Framework: [Oh My Zsh](https://ohmyz.sh)

> Oh My Zsh will not make you a 10x developer...but you may feel like one!
>
> **Oh My Zsh**

An awesome shell with autocompletion, history, alias, plugins, etc.

Install it by running: `sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"`

### Plugins

To install a plugin in ZSH, open your `.zshrc` file: `code ~/.zshrc` or `open ~/.zshrc`.
In this file, locate the line which starts with `plugins=` and simply write the name of the plugins you want to use.
Then save.

Here is a list of some of the plugins I use:

- (brew)
- (bun)
- (osx)
- (ubuntu)
- (zsh-nvm)
- alias-tips
- colored-man-pages
- colorize
- command-not-found
- fzf
- git
- history
- vscode
- yarn
- zsh-autosuggestions
- zsh-syntax-highlighting

### Theme: [PowerLevel10k](https://github.com/romkatv/powerlevel10k#meslo-nerd-font-patched-for-powerlevel10k)

> Powerlevel10k is a theme for Zsh. It emphasizes speed, flexibility and out-of-the-box experience.
>
> **PowerLevel10k**

Follow the [readme](https://github.com/romkatv/powerlevel10k#oh-my-zsh) to install it and set it up.

**TL;DR**:

```sh
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

- Restart `Zsh`
- Then run the interactive configuration: `p10k configure`

Below is what the interactive configuration looks like:

![P10k 'Interactive' Configuration](https://raw.githubusercontent.com/romkatv/powerlevel10k-media/master/configuration-wizard.gif)

A good overview of the terminal setup can be found here: [HowToGeek](https://www.howtogeek.com/362409/what-is-zsh-and-why-should-you-use-it-instead-of-bash/)

### Aliases

Aliases are shortcuts for other terminal commands.

The simplest way to see all the available aliases on your system

```sh
alias
```

Usually there will be lots of them. You can show specific aliases using the pipe and `grep`.
For example

```sh
alias | grep git
```

Here are the ones I've setup:

```sh
# Shell
alias c='clear'
alias copy='rsync -ah --info=progress2'
# alias ls='colorls'
# alias lc='colorls -lA --sd'
# alias la='colorls -a'

# ZSH
alias p10k="code ~/.p10k.zsh"
alias zshrc="code ~/.zshrc"

# GIT
alias gac="git add -A && git commit -m"
alias gbr+="git branch --format='%(HEAD) %(color:yellow)%(refname:short)%(color:reset) - %(contents:subject) %(color:green)(%(committerdate:relative)) [%(authorname)]' --sort=-committerdate"
alias gca="git commit --amend --no-edit"
alias gclean="git remote prune origin && git switch main | git branch --merged | egrep -v '(^\*|master|main|dev)' | xargs git branch -d"
alias gco--="git checkout @{-2}"
alias gco-="git checkout -"
alias gco-2="gco--"
alias gcod="git checkout dev"
alias gcom="git checkout main"
alias gdel="git branch -D"
alias githome='cd `git rev-parse --show-toplevel`'
alias gla="git pull --all && git fetch --all"
alias gmm="git merge main"
alias gmu="git switch main && git fetch --all && git pull --all"
alias gpo='git push --set-upstream origin $(git_current_branch)'
alias gt="git tag"
alias gta="git tag -a"
alias gundo="git reset --soft HEAD^"

# You fix the bug, stage only the changes related to the bug and execute
# This will create a branch called bugfix based off master with only the bug fix
gmove() {
  git stash -- $(git diff --staged --name-only) &&
  gwip ;
  git branch $1 $2 &&
  git checkout $1 &&
  git stash pop
}

# You fix the bug, stage only the changes related to the bug and execute
# This will create a branch called bugfix based off master with only the bug fix
killport() {
  kill -9 $(lsof -t -i:$1)
}

# YARN
alias ylf="yarn lint:fix"
alias yst="BROWSER=none yarn start"

# BUN
alias b="bun"
alias ba="bun add"
alias bad="bun add -d"
alias bb="bun run build"
alias bdev="bun run dev"
alias bf="bun run format"
alias bi="bun install"
alias blf="bun run lint:fix"
alias bln="bun run lint"
alias brm="bun remove"
alias brun="bun run"
alias bst="bun run start"
alias bt="bun test"
```

See `.zshrc` file for a more complete description, sources, functions, etc.

### Functions

You can also write functions in shell.
The following `cd` in a directory and then `ls` its content:

```sh
# Go to directory (`cd`) then list what's in it (`ls`)
function cl() {
  DIR="$*";
    # if no DIR given, go home
    if [ $# -lt 1 ]; then
      DIR=$HOME;
  fi;
  builtin cd "${DIR}" && \
  # use your preferred ls command
    ls
}

# You fix the bug, stage only the changes related to the bug and execute
# This will create a branch called bugfix based off master with only the bug fix
gmove() {
  git stash -- $(git diff --staged --name-only) &&
  gwip ;
  git branch $1 $2 &&
  git checkout $1 &&
  git stash pop
}

# You fix the bug, stage only the changes related to the bug and execute
# This will create a branch called bugfix based off master with only the bug fix
killport() {
  kill -9 $(lsof -t -i:$1)
}
```
