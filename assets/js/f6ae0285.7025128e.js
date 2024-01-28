"use strict";(self.webpackChunkmy_learning_curve=self.webpackChunkmy_learning_curve||[]).push([[1209],{5475:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var s=t(5893),i=t(1151),r=t(9286);const a="type IterableOrNullish =\n  | Record<string, unknown>\n  | unknown[]\n  | string\n  | null\n  | undefined\n\n/**\n * Checks if a given value is empty.\n *\n * This function considers a value to be empty if it is `null`, an empty string (or a string that contains only whitespace), or an object with no enumerable properties.\n *\n * The function uses loose equality (`==`) to check if the value is `null` or `undefined`. If the value is a string, it trims any leading or trailing whitespace before checking its length. If the value is an object, it uses `Object.keys()` to get an array of its own enumerable properties, and then checks the length of that array.\n *\n * Note that this function does not consider other falsy values (like `false`, `0`, or `NaN`) to be empty.\n *\n * @param {IterableOrNullish} val - The value to check. This can be any iterable (like an object or an array), a string, or a nullish value (`null` or `undefined`).\n * @returns {boolean} - Returns `true` if the value is considered empty, else `false`.\n *\n * @example\n * isEmpty(null) // returns true\n * isEmpty('') // returns true\n * isEmpty('   ') // returns true\n * isEmpty({}) // returns true\n * isEmpty([]) // returns true\n * isEmpty({ a: 1 }) // returns false\n * isEmpty('Hello, world!') // returns false\n * isEmpty(false) // returns false\n * isEmpty(0) // returns false\n * isEmpty(NaN) // returns false\n */\nexport const isEmpty = (val: IterableOrNullish): boolean => {\n  if (val == null) return true\n  return typeof val === 'string'\n    ? val.trim().length === 0\n    : Object.keys(val).length === 0\n}\n",l={},o="Is the collection empty?",u={id:"snippets/Typescript/Function/is-empty",title:"Is the collection empty?",description:"",source:"@site/docs/snippets/Typescript/Function/is-empty.mdx",sourceDirName:"snippets/Typescript/Function",slug:"/snippets/Typescript/Function/is-empty",permalink:"/my-learning-curve/docs/snippets/Typescript/Function/is-empty",draft:!1,unlisted:!1,editUrl:"https://github.com/edouardmisset/my-learning-curve/tree/main/docs/snippets/Typescript/Function/is-empty.mdx",tags:[],version:"current",frontMatter:{},sidebar:"snippetsSidebar",previous:{title:"Get the value of an environment variable",permalink:"/my-learning-curve/docs/snippets/Typescript/Function/get-env"},next:{title:"Check if the provided argument is a valid JSON",permalink:"/my-learning-curve/docs/snippets/Typescript/Function/is-valid-json"}},p={},c=[];function m(e){const n={h1:"h1",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"is-the-collection-empty",children:"Is the collection empty?"}),"\n",(0,s.jsx)(r.Z,{language:"ts",children:a})]})}function y(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}}}]);