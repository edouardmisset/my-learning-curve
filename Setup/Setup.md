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

**Bonus**: you can setup the same font (and its `ligatures`) in your Terminal to get the additionnal goodness. You should do it before running the `PowerLevel10k` configuration.

### Extensions

#### All around

- Live Server
- Browser Preview
- Live Share
- Bracket Pair Colorizer 2
- ESLint
- Prettier
- indent-rainbow
- Path Intellisense
- Project Manager
- Visual Studio IntelliCode

#### HTML

- Auto Rename Tag
- htmltagwrap

#### CSS

- (Color Highlight)

#### JS

- BabelJavaScript
- JavaScript (ES6) code snippets
- Quokka.js

<!-- #### TypeScript -->

#### React

- ES7 React/Reduc/GraphQL/React-Native Snippets

#### Node

- REST Client
- npm Intellisense

<!-- #### Deno -->

#### Git

- Git History
- Git Graph
- Git Lens

#### Customization

- Material Icon Theme
- One Dark Pro

### Settings

Here are my VS Code Settings.
Please only copy the line you understand and want to use.

```JSON
{
  "telemetry.enableTelemetry": false,
  "telemetry.enableCrashReporter": false,
  "workbench.colorTheme": "One Dark Pro",
  "emmet.triggerExpansionOnTab": true,
  "liveServer.settings.donotShowInfoMsg": true,
  "color-highlight.markerType": "outline",
  "color-highlight.matchWords": true,
  "colorHelper.formatsOrder": [
    "hsl",
    "named",
    "rgb",
    "hex",
    "hsb",
    "hwb",
    "cmyk",
    "gray"
  ],
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "window.zoomLevel": 2,
  "liveServer.settings.CustomBrowser": "chrome",
  "terminal.external.osxExec": "iTerm.app",
  "terminal.integrated.cursorStyle": "line",
  "editor.fontLigatures": true,
  "editor.fontFamily": "FiraCode-Retina",
  "editor.minimap.enabled": false,
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 10000,
  "diffEditor.codeLens": true,
  "editor.tabSize": 2,
  "git.confirmSync": false,
  "docthis.includeDateTag": true,
  "docthis.includeDescriptionTag": true,
  "git.defaultCloneDirectory": "~/Project/UDEMY",
  "gitlens.defaultDateShortFormat": null,
  "workbench.iconTheme": "material-icon-theme",
  "[json]": {
    "editor.quickSuggestions": {
      "strings": true
    },
    "editor.suggest.insertMode": "replace",
    "gitlens.codeLens.scopes": ["document"]
  },
  "workbench.startupEditor": "newUntitledFile",
  "git.autofetch": true,
  "terminal.integrated.sendKeybindingsToShell": true,
  "projectManager.git.baseFolders": ["~/Project/code"],
  "auto-rename-tag.activationOnLanguage": ["html", "xml", "php"],
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "terminal.integrated.shell.osx": "/bin/zsh",
  "colorHelper.pickerForm": "byPalette",
  "projectManager.any.baseFolders": [
    "/Users/edouard/Project/code/",
    "~/Project/WCS/Quests"
  ],
  "git.scanRepositories": ["/Users/edouard/Project/"],
  "terminal.integrated.fontFamily": "MesloLGS NF",
  "terminal.integrated.fontSize": 13,
  "terminal.integrated.macOptionIsMeta": true,
  "oneDarkPro.editorTheme": "oneDarkPro",
  "workbench.preferredDarkColorTheme": "One Dark Pro",
  "editor.minimap.renderCharacters": false,
  "projectManager.any.ignoredFolders": [
    "node_modules",
    "out",
    "typings",
    "test",
    "git"
  ],
  "projectManager.any.maxDepthRecursion": 1,
  "browser-preview.format": "png",
  "workbench.sideBar.location": "right",
  "browser-preview.startUrl": "http://localhost:5500/",
  "editor.linkedEditing": true,
  "prettier.singleQuote": true,
  "python.defaultInterpreterPath": "/usr/local/bin/python3",
  "diffEditor.ignoreTrimWhitespace": false,
  "editor.suggestSelection": "first",
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
  "liveshare.authenticationProvider": "GitHub",
  "prettier.jsxSingleQuote": true,
  "indentRainbow.indentSetter": {},
  "json.format.enable": true,
  "prettier.arrowParens": "avoid",
  "editor.renderWhitespace": "all",
  "breadcrumbs.enabled": false,
  "window.autoDetectHighContrast": false,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
}
```

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

- git
- zsh-syntax-highlighting
- zsh-nvm
- brew
- osx
- history
- command-not-found
- colored-man-pages
- vscode
- you-should-use

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

**Note**: a newer, more performant theme exists : `PowerLevel 10k`
