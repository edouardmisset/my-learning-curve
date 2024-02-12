"use strict";(self.webpackChunkmy_learning_curve=self.webpackChunkmy_learning_curve||[]).push([[1144],{6506:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=n(5893),i=n(1151);const s={},r="Data Gathering",o={id:"documentation/Data Analysis/data-gathering",title:"Data Gathering",description:"This is the step where you collect the data you need for your analysis. This can",source:"@site/docs/documentation/Data Analysis/02-data-gathering.md",sourceDirName:"documentation/Data Analysis",slug:"/documentation/Data Analysis/data-gathering",permalink:"/my-learning-curve/docs/documentation/Data Analysis/data-gathering",draft:!1,unlisted:!1,editUrl:"https://github.com/edouardmisset/my-learning-curve/tree/main/docs/documentation/Data Analysis/02-data-gathering.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Problem Definition",permalink:"/my-learning-curve/docs/documentation/Data Analysis/definition"},next:{title:"Data Cleaning",permalink:"/my-learning-curve/docs/documentation/Data Analysis/data-cleaning"}},c={},d=[];function l(e){const a={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"data-gathering",children:"Data Gathering"}),"\n",(0,t.jsx)(a.p,{children:"This is the step where you collect the data you need for your analysis. This can\ninvolve several different methods, depending on what kind of data you're looking\nfor. Here are a few examples:"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Downloading Existing Datasets"}),": There are many sources online where you\ncan download existing datasets for free. These can be great resources if\nyou're just starting out or if you're looking for data on a specific topic.\nFor example, websites like Kaggle, UCI Machine Learning Repository, and\ngovernment websites provide datasets on a wide range of topics."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Web Scraping"}),": If the data you need isn't available in an existing\ndataset, you might need to collect it yourself. One common method for this is\nweb scraping, which involves writing a program to extract data from websites.\nIn JavaScript, you can use libraries like axios for making HTTP requests and\ncheerio for parsing HTML."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"Here's an example of how you might scrape data from a website with axios and\ncheerio:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-ts",children:"import axios from 'axios'\nimport cheerio from 'cheerio'\n\n// Make a request to the website\nconst res = await axios.get('https://example.com')\n\n// Parse the HTML response with cheerio\nconst $ = cheerio.load(res.data)\n\n// Extract the data you need\nconst data = []\n$('your_selector').each((index, element) => {\n  data.push($(element).text())\n})\n"})}),"\n",(0,t.jsxs)(a.ol,{start:"3",children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"APIs"}),": Many websites and services provide APIs (Application Programming\nInterfaces) that you can use to access their data. This is often a more\nreliable and efficient way to gather data than web scraping. In JavaScript,\nyou can use the fetch API or libraries like axios to make API requests."]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"Here's an example of how you might gather data from an API with axios:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-ts",children:"import axios from 'axios'\n\n// Make a request to the API\nlet res = await axios.get('https://api.example.com/your_endpoint')\n\n// The data is usually in the response's data property\nlet data = res.data\n"})}),"\n",(0,t.jsx)(a.p,{children:"Remember, when gathering data, it's important to respect the terms of service of\nthe website or API you're using, and to collect and handle the data in a way\nthat respects user privacy."})]})}function h(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}}}]);