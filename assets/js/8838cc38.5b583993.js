"use strict";(self.webpackChunkmy_learning_curve=self.webpackChunkmy_learning_curve||[]).push([[7976],{2693:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>D,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=t(5893),r=t(1151),i=t(9286);const s="type milliseconds = number\ntype integer = number\n\ntype StartAndEndDate = {\n  startDate: Date\n  endDate: Date\n}\n\ntype Year = {\n  year: integer\n}\n\ntype DurationAndRefDate = {\n  referenceDate: Date\n  duration: milliseconds\n}\n\ntype FilterOptions = Year | StartAndEndDate | DurationAndRefDate\n\nconst isYearOption = (option: FilterOptions): option is Year => 'year' in option\n\nconst isDateRangeOption = (option: FilterOptions): option is StartAndEndDate =>\n  'startDate' in option && 'endDate' in option\n\nconst isReferenceDateOption = (\n  option: FilterOptions,\n): option is DurationAndRefDate =>\n  'referenceDate' in option && 'duration' in option\n\nconst isValidDate = (...dates: unknown[]): boolean => {\n  for (const date of dates)\n    if (!(date instanceof Date) || Number.isNaN(date)) return false\n\n  return true\n}\n\nconst isYearMatch = (dateValue: Date, year: number): boolean =>\n  dateValue.getFullYear() === year\n\nconst isWithinDateRange = (\n  dateValue: Date,\n  startDate: Date,\n  endDate: Date,\n): boolean => startDate <= dateValue && dateValue <= endDate\n\nconst isWithinDuration = (\n  dateValue: Date,\n  referenceDate: Date,\n  duration: number,\n): boolean => {\n  const refTime = referenceDate.getTime()\n  const valueTime = dateValue.getTime()\n  return refTime - duration <= valueTime && valueTime <= refTime\n}\n\nconst isDateCompatible = (val: unknown): val is Date | number | string =>\n  typeof val === 'string' || val instanceof Date || typeof val === 'number'\n\nexport const createFilter =\n  <Obj>(dateKey: keyof Obj, options: FilterOptions = {} as FilterOptions) =>\n  (obj: Obj): boolean => {\n    const val = obj[dateKey]\n    if (!isDateCompatible(val)) return true\n    const dateValue = new Date(val)\n    if (!isValidDate(dateValue)) return true\n\n    if (isYearOption(options)) return isYearMatch(dateValue, options.year)\n\n    if (\n      isDateRangeOption(options) &&\n      isValidDate(options.startDate, options.endDate)\n    )\n      return isWithinDateRange(dateValue, options.startDate, options.endDate)\n\n    if (isReferenceDateOption(options) && isValidDate(options.referenceDate))\n      return isWithinDuration(\n        dateValue,\n        options.referenceDate,\n        options.duration,\n      )\n\n    // If no valid options are provided, include the item in the result\n    return true\n  }\n\n// const resultByYear = ascents.filter(\n//   createFilterFunction('Date', { year: 2023 }),\n// )\n// console.log(resultByYear)\n\n// const resultByDateRange = ascents.filter(\n//   createFilterFunction('Date', {\n//     startDate: new Date('2023-07-26'),\n//     endDate: new Date(),\n//   }),\n// )\n// console.log(resultByDateRange)\n\n// const resultByDuration = ascents.filter(\n//   createFilterFunction('Date', {\n//     referenceDate: new Date(),\n//     duration: 30 * 24 * 60 * 60 * 1000,\n//   }),\n// )\n// console.log(resultByDuration)\n",o={},l="Create a filter by dates HOF",p={id:"snippets/Typescript/Array/filter-by-dates",title:"Create a filter by dates HOF",description:"",source:"@site/docs/snippets/Typescript/Array/filter-by-dates.mdx",sourceDirName:"snippets/Typescript/Array",slug:"/snippets/Typescript/Array/filter-by-dates",permalink:"/my-learning-curve/docs/snippets/Typescript/Array/filter-by-dates",draft:!1,unlisted:!1,editUrl:"https://github.com/edouardmisset/my-learning-curve/tree/main/docs/snippets/Typescript/Array/filter-by-dates.mdx",tags:[],version:"current",frontMatter:{},sidebar:"snippetsSidebar",previous:{title:"Array Performances",permalink:"/my-learning-curve/docs/snippets/Typescript/Array/array-performances"},next:{title:"Filter HOF",permalink:"/my-learning-curve/docs/snippets/Typescript/Array/filter"}},c={},u=[];function d(e){const n={h1:"h1",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"create-a-filter-by-dates-hof",children:"Create a filter by dates HOF"}),"\n",(0,a.jsx)(i.Z,{language:"ts",children:s})]})}function D(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);