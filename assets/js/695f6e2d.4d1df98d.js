"use strict";(self.webpackChunkmy_learning_curve=self.webpackChunkmy_learning_curve||[]).push([[2584],{1003:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var t=i(5893),r=i(1151);const a={authors:["Edouard"],tags:["JavaScript","Optimization","Memoization","Closures","Higher Order Functions"]},o="Memoization",s={permalink:"/my-learning-curve/blog/04-memoization",editUrl:"https://github.com/edouardmisset/my-learning-curve/blog/04-memoization.md",source:"@site/blog/04-memoization.md",title:"Memoization",description:"Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.",date:"2021-10-12T10:55:31.000Z",formattedDate:"October 12, 2021",tags:[{label:"JavaScript",permalink:"/my-learning-curve/blog/tags/java-script"},{label:"Optimization",permalink:"/my-learning-curve/blog/tags/optimization"},{label:"Memoization",permalink:"/my-learning-curve/blog/tags/memoization"},{label:"Closures",permalink:"/my-learning-curve/blog/tags/closures"},{label:"Higher Order Functions",permalink:"/my-learning-curve/blog/tags/higher-order-functions"}],readingTime:1.335,hasTruncateMarker:!1,authors:[{name:"Edouard Misset",title:"Full Stack Engineer",url:"https://github.com/edouardmisset",imageURL:"https://github.com/edouardmisset.png",key:"Edouard"}],frontMatter:{authors:["Edouard"],tags:["JavaScript","Optimization","Memoization","Closures","Higher Order Functions"]},unlisted:!1,prevItem:{title:"Generics",permalink:"/my-learning-curve/blog/02-generics"},nextItem:{title:"Destructuring Assignment",permalink:"/my-learning-curve/blog/03-desctructuring"}},c={authorsImageUrls:[void 0]},l=[{value:"The concept",id:"the-concept",level:2},{value:"Examples",id:"examples",level:2},{value:"Basic example",id:"basic-example",level:3},{value:"Advanced example",id:"advanced-example",level:3},{value:"Resources",id:"resources",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again."}),"\n",(0,t.jsx)(n.p,{children:"~ Wikipedia"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"the-concept",children:"The concept"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"As our applications grow and begin to carry out heavier computations, there comes an increasing need for speed (\ud83c\udfce\ufe0f) and the optimization of processes becomes a necessity. When we ignore this concern, we end up with programs that take a lot of time and consume a monstrous chunk of system resources during execution."}),"\n",(0,t.jsx)(n.p,{children:"Memoization is an optimization technique that speeds up applications by storing the results of expensive function calls and returning the cached result when the same inputs occur again."}),"\n",(0,t.jsx)(n.p,{children:"~ Philip Obosi"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Memoization is built upon two key JS concepts:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Closures"})," (function and the lexical environment where it was declared)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Higher Order Functions"})," (returning / accepting functions from functions)"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.h3,{id:"basic-example",children:"Basic example"}),"\n",(0,t.jsx)(n.p,{children:"Simple memoization exemple:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const cache = {}\nfunction memoizedAddTo1000(number) {\n  if (number in cache) {\n    return cache[number]\n  } else {\n    console.log('(Long time) calculation...')\n    cache[number] = number + 1000\n    return cache[number]\n  }\n}\n\nconsole.log('First call: ', memoizedAddTo1000(1))\nconsole.log('Second call: ', memoizedAddTo1000(1))\n\n// (Long time) calculation...\n// First call: 1001\n// Second call: 1001\n"})}),"\n",(0,t.jsx)(n.h3,{id:"advanced-example",children:"Advanced example"}),"\n",(0,t.jsx)(n.p,{children:"Memoization of a function:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const cache = {}\nfunction memoize(fn) {\n  return function (...args) {\n    if (cache[args]) {\n      return cache[args]\n    }\n    const result = fn.apply(this, args)\n    cache[args] = result\n    return result\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,t.jsxs)(n.p,{children:["Understanding Memoization in JavaScript by ",(0,t.jsx)(n.a,{href:"https://www.better.dev/understanding-memoization-in-javascript",children:"better.dev"})]}),"\n",(0,t.jsxs)(n.p,{children:["Memoization ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Memoization",children:"Wikipedia"})]}),"\n",(0,t.jsxs)(n.p,{children:["Andrei Neagoie ",(0,t.jsx)(n.a,{href:"https://zerotomastery.io/",children:"ZTM"})]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>o});var t=i(7294);const r={},a=t.createContext(r);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);