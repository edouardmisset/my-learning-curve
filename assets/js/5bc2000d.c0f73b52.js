"use strict";(self.webpackChunkmy_learning_curve=self.webpackChunkmy_learning_curve||[]).push([[2129],{8383:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>g,metadata:()=>p,toc:()=>c});var r=s(4848),t=s(8453),i=s(1432);const a="/**\n * Converts a string into a URL-friendly slug.\n *\n * The function performs the following steps:\n * 1. Converts the string to lower case.\n * 2. Trims whitespace from the start and end of the string.\n * 3. Removes all non-word characters, spaces, and hyphens using the regex /[^\\w\\s-]/g.\n * 4. Replaces one or more spaces, underscores, or hyphens with a single hyphen using the regex /[\\s_-]+/g.\n * 5. Removes hyphens from the start and end of the string using the regex /^-+|-+$/g.\n *\n * @param {string} str - The string to convert into a slug.\n * @returns {string} The slugified string.\n *\n * @example\n * slugify('Hello World!');\n * // => 'hello-world'\n */\nexport const slugify = (str: string): string =>\n  str\n    .toLowerCase()\n    .trim()\n    .replace(/[^\\w\\s-]/g, '')\n    .replace(/[\\s_-]+/g, '-')\n    .replace(/^-+|-+$/g, '')\n",g={},l="Create a URL friendly string (slug)",p={id:"snippets/Typescript/String/slugify",title:"Create a URL friendly string (slug)",description:"",source:"@site/docs/snippets/Typescript/String/slugify.mdx",sourceDirName:"snippets/Typescript/String",slug:"/snippets/Typescript/String/slugify",permalink:"/my-learning-curve/docs/snippets/Typescript/String/slugify",draft:!1,unlisted:!1,editUrl:"https://github.com/edouardmisset/my-learning-curve/tree/main/docs/snippets/Typescript/String/slugify.mdx",tags:[],version:"current",frontMatter:{},sidebar:"snippetsSidebar",previous:{title:"Remove accents from a string",permalink:"/my-learning-curve/docs/snippets/Typescript/String/remove-accents"},next:{title:"Check if two strings are equal case-insensitively",permalink:"/my-learning-curve/docs/snippets/Typescript/String/string-equals"}},o={},c=[];function u(e){const n={h1:"h1",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"create-a-url-friendly-string-slug",children:"Create a URL friendly string (slug)"}),"\n",(0,r.jsx)(i.A,{language:"ts",children:a})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}}}]);