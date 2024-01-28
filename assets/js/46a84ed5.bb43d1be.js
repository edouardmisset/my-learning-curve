"use strict";(self.webpackChunkmy_learning_curve=self.webpackChunkmy_learning_curve||[]).push([[3273],{9762:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=t(5893),i=t(1151),s=t(9286);const r="/** 10 Single line CSS layouts\n/* https://web.dev/articles/one-line-layouts\n/* by Una Kravets\n*/\n\n/** Super Centered */\n.parent {\n  display: grid;\n  place-items: center;\n}\n\n/** Deconstructed Pancake */\n.parent {\n  display: flex;\n}\n\n.child {\n  flex: 0 1 150px;\n}\n\n/* Or */\n\n.parent {\n  display: flex;\n}\n\n.child {\n  flex: 1 1 150px;\n}\n\n/** Sidebar Says */\n.parent {\n  display: grid;\n  grid-template-columns: minmax(150px, 25%) 1fr;\n}\n\n/** Pancake Stack */\n.parent {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n}\n\n/** Classic Holy Grail Layout */\n.parent {\n  display: grid;\n  grid-template: auto 1fr auto / auto 1fr auto;\n}\n\n/** 12-Span Grid */\n.parent {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n}\n\n.child-span-12 {\n  grid-column: 1 / 13;\n}\n\n/** RAM (Repeat, Auto, MinMax) */\n.parent {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n}\n\n/** Line Up */\n.parent {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n/** Clamping My Style */\n.parent {\n  inline-size: clamp(23ch, 60%, 46ch);\n}\n\n/** Respect for Aspect */\n.video {\n  aspect-ratio: 16 / 9;\n}\n",l={},p="One Line Layouts",o={id:"snippets/CSS/one-line-layouts",title:"One Line Layouts",description:"",source:"@site/docs/snippets/CSS/one-line-layouts.mdx",sourceDirName:"snippets/CSS",slug:"/snippets/CSS/one-line-layouts",permalink:"/my-learning-curve/docs/snippets/CSS/one-line-layouts",draft:!1,unlisted:!1,editUrl:"https://github.com/edouardmisset/my-learning-curve/tree/main/docs/snippets/CSS/one-line-layouts.mdx",tags:[],version:"current",frontMatter:{},sidebar:"snippetsSidebar",previous:{title:"Modern Reset Addition",permalink:"/my-learning-curve/docs/snippets/CSS/modern-reset-addition"},next:{title:"Partial Remedy Reset",permalink:"/my-learning-curve/docs/snippets/CSS/partial-remedy"}},d={},c=[];function u(n){const e={h1:"h1",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"one-line-layouts",children:"One Line Layouts"}),"\n",(0,a.jsx)(s.Z,{language:"css",children:r})]})}function m(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(u,{...n})}):u(n)}}}]);