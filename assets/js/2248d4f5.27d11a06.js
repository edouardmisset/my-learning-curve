"use strict";(self.webpackChunkmy_learning_curve=self.webpackChunkmy_learning_curve||[]).push([[8069],{5574:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>y,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var r=t(5893),i=t(1151),a=t(9286);const s="/**\n * Returns the object with the minimum value for the specified key from an array of objects.\n * If the array is empty, returns undefined.\n *\n * @template T - The type of the objects in the array. Must extend Record<string, unknown>.\n * @param {T[]} array - The array of objects to search.\n * @param {keyof T} key - The key to compare.\n * @returns {T | undefined} - The object with the minimum value for the specified key, or undefined if the array is empty.\n *\n * @example\n * const array = [{ id: 1, value: 10 }, { id: 2, value: 5 }, { id: 3, value: 20 }];\n * const key = 'value';\n * const minObject = minBy(array, key);\n * console.log(minObject); // Outputs: { id: 2, value: 5 }\n *\n * @example\n * const emptyArray = [];\n * const key = 'value';\n * const minObject = minBy(emptyArray, key);\n * console.log(minObject); // Outputs: undefined\n */\nexport const minBy = <T extends Record<string, unknown>>(\n  array: T[],\n  key: keyof T,\n): T | undefined => {\n  if (array.length === 0) return undefined\n\n  return array.reduce((acc, val) => (acc[key] < val[key] ? acc : val), array[0])\n}\n",c={},y="Find the element in an array with the lowest value for the specified key",o={id:"snippets/Typescript/Array/min-by",title:"Find the element in an array with the lowest value for the specified key",description:"",source:"@site/docs/snippets/Typescript/Array/min-by.mdx",sourceDirName:"snippets/Typescript/Array",slug:"/snippets/Typescript/Array/min-by",permalink:"/my-learning-curve/docs/snippets/Typescript/Array/min-by",draft:!1,unlisted:!1,editUrl:"https://github.com/edouardmisset/my-learning-curve/tree/main/docs/snippets/Typescript/Array/min-by.mdx",tags:[],version:"current",frontMatter:{},sidebar:"snippetsSidebar",previous:{title:"Find the element in an array with the highest value for the specified key",permalink:"/my-learning-curve/docs/snippets/Typescript/Array/max-by"},next:{title:"Select a property in an array of objects",permalink:"/my-learning-curve/docs/snippets/Typescript/Array/select-by"}},p={},l=[];function u(e){const n={h1:"h1",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"find-the-element-in-an-array-with-the-lowest-value-for-the-specified-key",children:"Find the element in an array with the lowest value for the specified key"}),"\n",(0,r.jsx)(a.Z,{language:"ts",children:s})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}}}]);