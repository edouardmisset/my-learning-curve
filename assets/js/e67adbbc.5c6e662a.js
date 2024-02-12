"use strict";(self.webpackChunkmy_learning_curve=self.webpackChunkmy_learning_curve||[]).push([[7116],{4067:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=t(5893),s=t(1151);const r={},a="Folder structure",i={id:"documentation/Project Collaboration/folder-structure",title:"Folder structure",description:"\u26a0\ufe0f: default exports are used for lazy loading components (mainly pages and very large components). This is to increase first load speed. In this case, we do not use index.ts files.",source:"@site/docs/documentation/Project Collaboration/02-folder-structure.md",sourceDirName:"documentation/Project Collaboration",slug:"/documentation/Project Collaboration/folder-structure",permalink:"/my-learning-curve/docs/documentation/Project Collaboration/folder-structure",draft:!1,unlisted:!1,editUrl:"https://github.com/edouardmisset/my-learning-curve/tree/main/docs/documentation/Project Collaboration/02-folder-structure.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Naming Conventions",permalink:"/my-learning-curve/docs/documentation/Project Collaboration/naming-conventions"},next:{title:"Component Structure",permalink:"/my-learning-curve/docs/documentation/Project Collaboration/component-structure"}},c={},l=[];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"folder-structure",children:"Folder structure"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"component-name\n\u251c\u2500\u2500 helpers.ts               // Contains the handler functions and all the other function specifically needed in the component\n\u251c\u2500\u2500 index.ts                 // Only exports the component (`export * from './component-name'`)\n\u251c\u2500\u2500 component-name.tsx       // Contains the actual component\n\u251c\u2500\u2500 styles.ts                // Contains the component's style\n\u251c\u2500\u2500 constants.ts             // Contains the specific constants used in the component\n\u251c\u2500\u2500 types.ts                 // Contains the types (props ans others) used in the component and helper functions, hooks, etc.\n\u251c\u2500\u2500 hooks.ts                 // Contains the hooks used in the component\n\u2514\u2500\u2500 component-name.tests.ts  // Contains the (unit / snapshot) tests for the component\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u26a0\ufe0f: ",(0,o.jsx)(n.code,{children:"default export"}),"s are used for lazy loading components (mainly pages and very large components). This is to increase first load speed. In this case, we do not use ",(0,o.jsx)(n.code,{children:"index.ts"})," files."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Like in the example above, in a perfect world, we would be using a kebab-case naming convention for all folders and files, because PascalCase named folders/files are handled differently in the diversity of operating systems which may lead to bugs when working with teams using different OSs.\n~ ",(0,o.jsx)(n.a,{href:"https://www.robinwieruch.de/react-folder-structure/",children:"Robin Wieruch"})]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);