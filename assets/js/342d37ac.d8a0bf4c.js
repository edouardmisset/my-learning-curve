"use strict";(self.webpackChunkmy_learning_curve=self.webpackChunkmy_learning_curve||[]).push([[1614],{5515:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>h,default:()=>l,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var a=n(4848),s=n(8453),r=n(1432);const o="/**\n * Returns the first date of the month for a given date.\n *\n * @param {Date} [date=new Date()] - The date from which to extract the month. Defaults to the current date.\n * @returns {Date} The first date of the month.\n *\n * @example\n * // For a date input of '2022-12-15'\n * firstDateOfMonth(new Date('2022-12-15'))\n * // Returns '2022-12-01'\n *\n * @example\n * // When no date input is provided\n * firstDateOfMonth()\n * // Returns the first date of the current month\n */\nexport const firstDateOfMonth = (date = new Date()): Date =>\n  new Date(date.getFullYear(), date.getMonth(), 1)\n\n/**\n * Returns the last date of the month for a given date.\n *\n * @param {Date} [date=new Date()] - The date from which to extract the month. Defaults to the current date.\n * @returns {Date} The last date of the month.\n *\n * @example\n * // For a date input of '2022-12-15'\n * lastDateOfMonth(new Date('2022-12-15'))\n * // Returns '2022-12-31'\n *\n * @example\n * // When no date input is provided\n * lastDateOfMonth()\n * // Returns the last date of the current month\n */\nexport const lastDateOfMonth = (date = new Date()): Date =>\n  new Date(date.getFullYear(), date.getMonth() + 1, 0)\n",i={},h="Get the first and last date of the month",d={id:"snippets/Typescript/Date/first-last-date-of-month",title:"Get the first and last date of the month",description:"",source:"@site/docs/snippets/Typescript/Date/first-last-date-of-month.mdx",sourceDirName:"snippets/Typescript/Date",slug:"/snippets/Typescript/Date/first-last-date-of-month",permalink:"/my-learning-curve/docs/snippets/Typescript/Date/first-last-date-of-month",draft:!1,unlisted:!1,editUrl:"https://github.com/edouardmisset/my-learning-curve/tree/main/docs/snippets/Typescript/Date/first-last-date-of-month.mdx",tags:[],version:"current",frontMatter:{},sidebar:"snippetsSidebar",previous:{title:"Convert String Date",permalink:"/my-learning-curve/docs/snippets/Typescript/Date/convert-string-date"},next:{title:"Equals",permalink:"/my-learning-curve/docs/snippets/Typescript/Function/equals"}},p={},c=[];function f(t){const e={h1:"h1",...(0,s.R)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"get-the-first-and-last-date-of-the-month",children:"Get the first and last date of the month"}),"\n",(0,a.jsx)(r.A,{language:"ts",children:o})]})}function l(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(f,{...t})}):f(t)}}}]);