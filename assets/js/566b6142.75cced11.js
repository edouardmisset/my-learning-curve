"use strict";(self.webpackChunkmy_learning_curve=self.webpackChunkmy_learning_curve||[]).push([[2099],{3645:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>b,contentTitle:()=>a,default:()=>j,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=s(5893),r=s(1151),o=s(9286);const c="/**\n * Sorts the keys of an object in lexicographical order and returns a new object\n * with the sorted keys.\n *\n * It assumes the keys are strings.\n *\n *\n * @template Obj - The type of the object.\n * @param {Obj} obj - The object whose keys are to be sorted.\n * @param {boolean} [ascending=true] - Whether to sort the keys in ascending\n * order. If false, the keys are sorted in descending order.\n * @returns {Obj} A new object with the sorted keys.\n *\n * @example\n * const obj = { b: 1, a: 2, c: 3 };\n * const sortedObjAsc = sortKeys(obj);\n * console.log(sortedObjAsc); // { a: 2, b: 1, c: 3 }\n * const sortedObjDesc = sortKeys(obj, false);\n * console.log(sortedObjDesc); // { c: 3, b: 1, a: 2 }\n */\nexport const sortKeys = <Obj extends Record<string, unknown>>(\n  obj: Obj,\n  ascending = true,\n): Obj =>\n  Object.fromEntries(\n    Object.entries(obj).sort(\n      ([leftKey], [rightKey]) =>\n        leftKey.localeCompare(rightKey) * (ascending ? 1 : -1),\n    ),\n  ) as Obj\n",i={},a="Sort an Object Keys",p={id:"snippets/Typescript/Object/sort-keys",title:"Sort an Object Keys",description:"",source:"@site/docs/snippets/Typescript/Object/sort-keys.mdx",sourceDirName:"snippets/Typescript/Object",slug:"/snippets/Typescript/Object/sort-keys",permalink:"/my-learning-curve/docs/snippets/Typescript/Object/sort-keys",draft:!1,unlisted:!1,editUrl:"https://github.com/edouardmisset/my-learning-curve/tree/main/docs/snippets/Typescript/Object/sort-keys.mdx",tags:[],version:"current",frontMatter:{},sidebar:"snippetsSidebar",previous:{title:"Shallow comparison",permalink:"/my-learning-curve/docs/snippets/Typescript/Object/shallow-comparison"},next:{title:"Sort a plain object's values",permalink:"/my-learning-curve/docs/snippets/Typescript/Object/sort-values"}},b={},l=[];function d(e){const t={h1:"h1",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"sort-an-object-keys",children:"Sort an Object Keys"}),"\n",(0,n.jsx)(o.Z,{language:"ts",children:c})]})}function j(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);