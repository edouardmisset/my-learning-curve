"use strict";(self.webpackChunkmy_learning_curve=self.webpackChunkmy_learning_curve||[]).push([[6865],{354:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>f,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var s=i(5893),t=i(1151),r=i(9286);const o="/** Credits Stephanie Eckles\n* https://moderncss.dev/generating-font-size-css-rules-and-creating-a-fluid-type-scale/\n* https://moderncss.dev/container-query-units-and-fluid-typography/\n*/\n\nbody {\n  line-height: 1.5;\n}\n\np,\nli,\nh1,\nh2,\nh3,\nh4 {\n  /* Help prevent overflow of long words/names/URLs */\n  overflow-wrap: break-word;\n\n  /* Optional, not supported for all languages */\n  hyphens: auto;\n}\n\n.fluid-type {\n  font-size: clamp(1rem, 4vw + 1rem, 3rem);\n}\n\n/* Progressive enhancement */\n\n:root {\n  --headline-1: 2.75rem;\n  --headline-2: 2.35rem;\n  --headline-3: 1.5rem;\n  --headline-4: 1.15rem;\n}\n\nh1,\n.h1 {\n  --font-size: var(--headline-1);\n\n  font-size: var(--headline-1);\n}\n\nh2,\n.h2 {\n  --font-size: var(--headline-2);\n  --font-size-fluid: 4.5cqi;\n\n  font-size: var(--headline-2);\n}\n\nh3,\n.h3 {\n  --font-size: var(--headline-3);\n  --font-size-fluid: 4.25cqi;\n  --font-size-diff: 0.2;\n\n  font-size: var(--headline-3);\n}\n\nh4,\n.h4 {\n  --font-size: var(--headline-4);\n  --font-size-fluid: 4cqi;\n  --font-size-diff: 0.2;\n\n  font-size: var(--headline-4);\n}\n\n@supports (font-size: 1cqi) {\n  :is(h1, .h1, h2, .h2, h3, .h3, h4, .h4, .fluid-type) {\n    font-size: clamp(\n      max(\n        1rem,\n        var(--font-size) - var(--font-size) * var(--font-size-diff, 0.3)\n      ),\n      var(--font-size-fluid, 5cqi),\n      var(--font-size)\n    );\n  }\n}\n",a={},l="Fluid Font Size",d={id:"snippets/css/fluid-font-size",title:"Fluid Font Size",description:"",source:"@site/docs/snippets/css/fluid-font-size.mdx",sourceDirName:"snippets/css",slug:"/snippets/css/fluid-font-size",permalink:"/my-learning-curve/docs/snippets/css/fluid-font-size",draft:!1,unlisted:!1,editUrl:"https://github.com/edouardmisset/my-learning-curve/docs/snippets/css/fluid-font-size.mdx",tags:[],version:"current",frontMatter:{},sidebar:"snippetsSidebar",next:{title:"Kevin Powell Starter",permalink:"/my-learning-curve/docs/snippets/css/kevin-powell-starter"}},f={},c=[];function h(n){const e={h1:"h1",...(0,t.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"fluid-font-size",children:"Fluid Font Size"}),"\n",(0,s.jsx)(r.Z,{language:"css",children:o})]})}function p(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}}}]);