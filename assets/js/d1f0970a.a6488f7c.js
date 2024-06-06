"use strict";(self.webpackChunkmy_learning_curve=self.webpackChunkmy_learning_curve||[]).push([[1509],{2534:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>m,toc:()=>g});var r=t(4848),s=t(8453),i=t(1432);const c="/**\n * Removes diacritics (accents) from a string.\n *\n * The function uses the \"Normalization Form D\" (NFD) to decompose the string into base characters and combining characters (accents).\n * It then removes the accents by replacing them with an empty string.\n *\n * The regular expression /[\\u0300-\\u036f]/g matches any character in the Unicode range from 0300 to 036F, which includes many common diacritical marks.\n *\n * @param {string} str - The string from which to remove accents.\n * @returns {string} The string with accents removed.\n *\n * @example\n * removeAccent('r\xe9sum\xe9');\n * // => 'resume'\n */\nexport const removeAccents = (str: string): string =>\n  str\n    .normalize('NFD')\n    // biome-ignore lint/suspicious/noMisleadingCharacterClass: this is precisely what we want to do\n    .replace(/[\\u0300-\\u036f]/g, '')\n",a={},o="Remove accents from a string",m={id:"snippets/Typescript/String/remove-accents",title:"Remove accents from a string",description:"",source:"@site/docs/snippets/Typescript/String/remove-accents.mdx",sourceDirName:"snippets/Typescript/String",slug:"/snippets/Typescript/String/remove-accents",permalink:"/my-learning-curve/docs/snippets/Typescript/String/remove-accents",draft:!1,unlisted:!1,editUrl:"https://github.com/edouardmisset/my-learning-curve/tree/main/docs/snippets/Typescript/String/remove-accents.mdx",tags:[],version:"current",frontMatter:{},sidebar:"snippetsSidebar",previous:{title:"Check for empty strings",permalink:"/my-learning-curve/docs/snippets/Typescript/String/is-empty-string"},next:{title:"Create a URL friendly string (slug)",permalink:"/my-learning-curve/docs/snippets/Typescript/String/slugify"}},p={},g=[];function l(e){const n={h1:"h1",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"remove-accents-from-a-string",children:"Remove accents from a string"}),"\n",(0,r.jsx)(i.A,{language:"ts",children:c})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}}}]);