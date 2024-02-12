"use strict";(self.webpackChunkmy_learning_curve=self.webpackChunkmy_learning_curve||[]).push([[5330],{9310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var s=n(5893),a=n(1151);const r={},i="Interpretation",o={id:"documentation/Data Analysis/interpretation",title:"Interpretation",description:"Interpreting your results is about understanding what the statistical analysis",source:"@site/docs/documentation/Data Analysis/06-interpretation.md",sourceDirName:"documentation/Data Analysis",slug:"/documentation/Data Analysis/interpretation",permalink:"/my-learning-curve/docs/documentation/Data Analysis/interpretation",draft:!1,unlisted:!1,editUrl:"https://github.com/edouardmisset/my-learning-curve/tree/main/docs/documentation/Data Analysis/06-interpretation.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Data Analysis Techniques",permalink:"/my-learning-curve/docs/documentation/Data Analysis/analys-data"},next:{title:"Development Checklist",permalink:"/my-learning-curve/docs/documentation/Project Collaboration/development-checklist"}},d={},u=[];function c(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"interpretation",children:"Interpretation"}),"\n",(0,s.jsx)(t.p,{children:"Interpreting your results is about understanding what the statistical analysis\nof your data is telling you in the context of the problem you're trying to\nsolve. It's about making sense of the numbers and drawing conclusions."}),"\n",(0,s.jsx)(t.p,{children:"For example, let's say you're analyzing a dataset of student grades to\nunderstand how study time affects grades. You calculate the mean (average) grade\nfor students who studied less than 2 hours per day and for those who studied\nmore than 2 hours per day."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const lessThanTwoHours = students.filter(student => student.studyTime < 2)\nconst moreThanTwoHours = students.filter(student => student.studyTime > 2)\n\nconst meanLessThanTwoHours =\n  lessThanTwoHours.reduce((sum, student) => sum + student.grade, 0) /\n  lessThanTwoHours.length\nconst meanMoreThanTwoHours =\n  moreThanTwoHours.reduce((sum, student) => sum + student.grade, 0) /\n  moreThanTwoHours.length\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Now, you need to interpret these results. If ",(0,s.jsx)(t.code,{children:"meanMoreThanTwoHours"})," is\nsignificantly higher than ",(0,s.jsx)(t.code,{children:"meanLessThanTwoHours"}),", you might conclude that\nstudying more than 2 hours per day leads to better grades. However, you should\nalso consider other factors that could affect grades (like attendance, prior\nknowledge, etc.) before drawing a definitive conclusion."]}),"\n",(0,s.jsx)(t.p,{children:"Remember, interpretation is not just about the statistical significance of the\nresults, but also their practical significance. Even if the difference in means\nis statistically significant, if the difference is very small, it might not be\npractically significant. For example, if the mean grade for students who study\nmore than 2 hours is 85 and for those who study less is 84.5, the difference\nmight not be meaningful in a practical sense."})]})}function l(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);