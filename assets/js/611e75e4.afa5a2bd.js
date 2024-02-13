"use strict";(self.webpackChunkmy_learning_curve=self.webpackChunkmy_learning_curve||[]).push([[6098],{8138:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>p,toc:()=>y});var t=r(5893),a=r(1151),i=r(9286);const s="// Find an object in an array by a key and value.\n\nexport const createFindBy =\n  <Obj extends Record<string, unknown>>(key: keyof Obj) =>\n  (value: unknown) =>\n  (obj: Obj): boolean => {\n    if (!Object.hasOwn(obj, key))\n      throw new Error(`Key \"${String(key)}\" does not exist in the object.`)\n\n    return obj[key] === value\n  }\n\nexport const findById = createFindBy('id')\nexport const findByName = createFindBy('name')\n",c={},o="Find an Object in an Array by Key and Value",p={id:"snippets/Typescript/Array/find",title:"Find an Object in an Array by Key and Value",description:"",source:"@site/docs/snippets/Typescript/Array/find.mdx",sourceDirName:"snippets/Typescript/Array",slug:"/snippets/Typescript/Array/find",permalink:"/my-learning-curve/docs/snippets/Typescript/Array/find",draft:!1,unlisted:!1,editUrl:"https://github.com/edouardmisset/my-learning-curve/tree/main/docs/snippets/Typescript/Array/find.mdx",tags:[],version:"current",frontMatter:{},sidebar:"snippetsSidebar",previous:{title:"Filter HOF",permalink:"/my-learning-curve/docs/snippets/Typescript/Array/filter"},next:{title:"Return the first or last n elements of an array",permalink:"/my-learning-curve/docs/snippets/Typescript/Array/get-n-first-or-last"}},d={},y=[];function l(n){const e={h1:"h1",...(0,a.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"find-an-object-in-an-array-by-key-and-value",children:"Find an Object in an Array by Key and Value"}),"\n",(0,t.jsx)(i.Z,{language:"ts",children:s})]})}function u(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}}}]);