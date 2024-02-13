"use strict";(self.webpackChunkmy_learning_curve=self.webpackChunkmy_learning_curve||[]).push([[47],{6514:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var t=n(5893),r=n(1151),i=n(9286);const s="/**\n * This function calculates the standard deviation of a set of numbers.\n * The standard deviation is a measure of the amount of variation or dispersion\n * of a set of values.\n * A low standard deviation means that the values tend to be close to the mean\n * (also called the expected value) of the set,\n * while a high standard deviation means that the values are spread out over a\n * wider range.\n *\n * It can calculate the standard deviation for a population or a sample.\n * - Population: When the data set includes all of the data you are interested\n *   in.\n * - Sample: When the data set only includes part of the data you are interested\n *   in.\n *\n * @param {number[]} arr - The array of numbers.\n * @param {boolean} [usePopulation=false] - Whether to calculate the standard\n * deviation for a population or a sample.\n * @returns {number} The standard deviation of the numbers.\n *\n * @example\n * standardDeviation([1, 2, 3, 4])\n * // returns approximately 1.291\n *\n * @example\n * standardDeviation([1, 2, 3, 4], true)\n * // returns approximately 1.118\n */\nexport const standardDeviation = (\n  arr: number[],\n  usePopulation = false,\n): number => {\n  const size = arr.length\n  const mean = arr.reduce((acc, val) => acc + val, 0) / size\n  const variance =\n    arr.reduce((acc, val) => acc + (val - mean) ** 2, 0) /\n    (size - (usePopulation ? 0 : 1))\n  return Math.sqrt(variance)\n}\n\n/**\n * @description Alias for the {@link standardDeviation} function.\n */\nexport const variance = standardDeviation\n",o={},d="Standard Deviation and Variance",c={id:"snippets/Typescript/Number/standard-deviation",title:"Standard Deviation and Variance",description:"",source:"@site/docs/snippets/Typescript/Number/standard-deviation.mdx",sourceDirName:"snippets/Typescript/Number",slug:"/snippets/Typescript/Number/standard-deviation",permalink:"/my-learning-curve/docs/snippets/Typescript/Number/standard-deviation",draft:!1,unlisted:!1,editUrl:"https://github.com/edouardmisset/my-learning-curve/tree/main/docs/snippets/Typescript/Number/standard-deviation.mdx",tags:[],version:"current",frontMatter:{},sidebar:"snippetsSidebar",previous:{title:"Scale a value from one range to another",permalink:"/my-learning-curve/docs/snippets/Typescript/Number/scale"},next:{title:"Sum an array of numbers",permalink:"/my-learning-curve/docs/snippets/Typescript/Number/sum"}},u={},p=[];function l(e){const a={h1:"h1",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"standard-deviation-and-variance",children:"Standard Deviation and Variance"}),"\n",(0,t.jsx)(i.Z,{language:"ts",children:s})]})}function m(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}}}]);