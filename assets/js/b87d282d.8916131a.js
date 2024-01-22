"use strict";(self.webpackChunkmy_learning_curve=self.webpackChunkmy_learning_curve||[]).push([[1177],{4307:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=t(5893),i=t(1151),o=t(9286);const s='{\n  "$schema": "https://biomejs.dev/schemas/1.5.3/schema.json",\n  "organizeImports": {\n    "enabled": true\n  },\n  "linter": {\n    "enabled": true,\n    "rules": {\n      "recommended": true\n    }\n  },\n  "formatter": {\n    "enabled": true,\n    "indentStyle": "space"\n  },\n  "vcs": {\n    "enabled": true,\n    "clientKind": "git"\n  },\n  "javascript": {\n    "formatter": {\n      "semicolons": "asNeeded",\n      "arrowParentheses": "asNeeded",\n      "quoteStyle": "single"\n    }\n  }\n}\n',a={},d="Biome",c={id:"setup/biome",title:"Biome",description:"Biome is a replacement for ESLint and Prettier that is designed to be more",source:"@site/docs/setup/biome.mdx",sourceDirName:"setup",slug:"/setup/biome",permalink:"/my-learning-curve/docs/setup/biome",draft:!1,unlisted:!1,editUrl:"https://github.com/edouardmisset/my-learning-curve/tree/main/docs/setup/biome.mdx",tags:[],version:"current",frontMatter:{},sidebar:"setupSidebar",next:{title:"ESLint",permalink:"/my-learning-curve/docs/setup/eslint"}},m={},u=[{value:"Biome Configuration",id:"biome-configuration",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"biome",children:"Biome"}),"\n",(0,r.jsx)(n.p,{children:"Biome is a replacement for ESLint and Prettier that is designed to be more\nflexible and easier to configure."}),"\n",(0,r.jsx)(n.h2,{id:"biome-configuration",children:"Biome Configuration"}),"\n",(0,r.jsx)(n.p,{children:"Here is a basic configuration for Biome:"}),"\n",(0,r.jsx)(o.Z,{language:"ts",children:s}),"\n",(0,r.jsx)(n.p,{children:"Along with VS Code configuration:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "editor.formatOnPaste": true,\n  "editor.formatOnSave": true,\n  "editor.codeActionsOnSave": {\n    "quickfix.biome": true,\n    "source.organizeImports.biome": true\n  },\n  "editor.defaultFormatter": "esbenp.prettier-vscode",\n  "[javascript]": {\n    "editor.defaultFormatter": "biomejs.biome"\n  },\n  "[javascriptreact]": {\n    "editor.defaultFormatter": "biomejs.biome"\n  },\n  "[typescript]": {\n    "editor.defaultFormatter": "biomejs.biome"\n  },\n  "[typescriptreact]": {\n    "editor.defaultFormatter": "biomejs.biome"\n  },\n  "[json]": {\n    "editor.defaultFormatter": "biomejs.biome"\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["NOTE: At this time (",(0,r.jsx)(n.code,{children:"2024-01-22"}),"), Biome (",(0,r.jsx)(n.code,{children:"v1.5.3"}),") does not support formatting HTML or\nCSS. So you should still use Prettier as the default formatter."]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}}}]);