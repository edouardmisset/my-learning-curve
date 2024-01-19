"use strict";(self.webpackChunkmy_learning_curve=self.webpackChunkmy_learning_curve||[]).push([[1232],{1816:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=t(5893),a=t(1151),i=t(9286);const s="// Date\nconst oneYearInMilliseconds = 365 * 24 * 60 * 60 * 1000\n\ntype CreateDateFilter = (\n  params:\n    | { startDate: Date; endDate: Date }\n    | { referenceDate?: Date; durationInMilliseconds?: number }\n    | { year: number }\n    | undefined,\n) => (date: Date) => boolean\n\nexport const createDateFilter: CreateDateFilter = (params = {}) => {\n  if ('year' in params) return date => date.getFullYear() === params.year\n\n  if ('startDate' in params && 'endDate' in params)\n    return date =>\n      date.getTime() >= params.startDate.getTime() &&\n      date.getTime() <= params.endDate.getTime()\n\n  const {\n    referenceDate = new Date(),\n    durationInMilliseconds = oneYearInMilliseconds,\n  } = params\n\n  return date =>\n    date.getTime() >= referenceDate.getTime() - durationInMilliseconds\n}\n\nexport const filter2018 = createDateFilter({ year: 2018 })\nexport const filter2023 = createDateFilter({ year: 2023 })\nexport const filterLast12Months = createDateFilter({\n  durationInMilliseconds: oneYearInMilliseconds,\n})\nexport const filterLast5years = createDateFilter({\n  durationInMilliseconds: 5 * oneYearInMilliseconds,\n})\n\n// window.console.log(\n//   '\ud83d\ude80 ~ filter2024:',\n//   ascentList.filter(({ date }) => filter2018(date)),\n// )\n// window.console.log(\n//   '\ud83d\ude80 ~ filter5Years:',\n//   ascentList.filter(({ date }) => filterLast5years(date)),\n// )\n\n// Boolean\n\nexport const createBooleanFilter =\n  (key?: string) =>\n  (value: boolean | Record<string, unknown>): boolean => {\n    if (typeof value === 'boolean') return value\n\n    if (typeof value?.[key] === 'boolean') return value[key] === true\n\n    throw new Error(`Invalid key (${key}) or value (${value})`)\n  }\n",l={},o="Filter HOF",c={id:"snippets/Typescript/array/filter",title:"Filter HOF",description:"",source:"@site/docs/snippets/Typescript/array/filter.mdx",sourceDirName:"snippets/Typescript/array",slug:"/snippets/Typescript/array/filter",permalink:"/my-learning-curve/docs/snippets/Typescript/array/filter",draft:!1,unlisted:!1,editUrl:"https://github.com/edouardmisset/my-learning-curve/tree/main/docs/snippets/Typescript/array/filter.mdx",tags:[],version:"current",frontMatter:{},sidebar:"snippetsSidebar",previous:{title:"Create a filter by dates HOF",permalink:"/my-learning-curve/docs/snippets/Typescript/array/filter-by-dates"},next:{title:"Find an Object in an Array by Key and Value",permalink:"/my-learning-curve/docs/snippets/Typescript/array/find"}},p={},d=[];function u(e){const n={h1:"h1",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"filter-hof",children:"Filter HOF"}),"\n",(0,r.jsx)(i.Z,{language:"ts",children:s})]})}function y(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}}}]);