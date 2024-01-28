"use strict";(self.webpackChunkmy_learning_curve=self.webpackChunkmy_learning_curve||[]).push([[3098],{1048:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(5893),i=t(1151);const o={authors:["Edouard"],tags:["typescript","types"]},s="Typescript types",l={permalink:"/my-learning-curve/blog/01-types",editUrl:"https://github.com/edouardmisset/my-learning-curve/tree/main/blog/01-types.md",source:"@site/blog/01-types.md",title:"Typescript types",description:"Primitive types",date:"2023-10-06T15:52:45.000Z",formattedDate:"October 6, 2023",tags:[{label:"typescript",permalink:"/my-learning-curve/blog/tags/typescript"},{label:"types",permalink:"/my-learning-curve/blog/tags/types"}],readingTime:1.64,hasTruncateMarker:!1,authors:[{name:"Edouard Misset",title:"Full Stack Engineer",url:"https://github.com/edouardmisset",imageURL:"https://github.com/edouardmisset.png",key:"Edouard"}],frontMatter:{authors:["Edouard"],tags:["typescript","types"]},unlisted:!1,prevItem:{title:"Higher Order Functions",permalink:"/my-learning-curve/blog/05-higher-order-functions"},nextItem:{title:"Generics",permalink:"/my-learning-curve/blog/02-generics"}},a={authorsImageUrls:[void 0]},c=[{value:"Primitive types",id:"primitive-types",level:2},{value:"Complex types",id:"complex-types",level:2}];function p(e){const n={code:"code",h2:"h2",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"primitive-types",children:"Primitive types"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"// boolean\nlet isCool: boolean = false\n\n// number\nlet age: number = 56\n\n// string\nlet eyeColor: string = 'brown'\nlet favoriteQuote: string = `I'm not old, I'm only ${age}`\n\n// null and undefined\nlet meh: undefined = undefined\nlet noo: null = null\n"})}),"\n",(0,r.jsx)(n.h2,{id:"complex-types",children:"Complex types"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"// Array\nlet pets: string[] = ['cat', 'mouse', 'dragon']\nlet pets2: Array<string> = ['pig', 'lion', 'dragon']\n\n// Tuple\nlet basket: [string, number]\nbasket = ['basketball', 10]\n\n// Enum\nenum Size {\n  Small = 1,\n  Medium = 2,\n  Large = 3,\n}\nlet sizeName: string = Size[2]\nalert(sizeName) // Displays 'Medium' as its value is 2 above\n\ntype animals = 'cat' | 'mouse' | 'dragon'\n\n// Any\nlet whatever: any = 'aaaaghhhhhh noooooo!'\n\n// void\nlet sing = (): void => console.log('Lalalala')\n\n// never\nlet error = (): never => {\n  throw Error('blah!')\n}\n\n// Type Assertion\nlet ohHiThere: any = 'OH HI THERE'\nlet stringLength: number = (ohHiThere as string).length\n\ninterface CatArmy {\n  count: number\n  type: string\n}\n\nlet dog = {} as CatArmy\ndog.count = 5\n\n// Interface\ninterface RobotArmy {\n  count: number\n  type: string\n  magic?: string\n}\n\nlet fightRobotArmy = (robots: RobotArmy): void => {\n  console.log('FIGHT!')\n}\nlet fightRobotArmy2 = (robots: {\n  count: number\n  type: string\n  magic?: string\n}): void => {\n  console.log('FIGHT!')\n}\n\n// Function\nlet fightRobotArmyF = (robots: RobotArmy): void => {\n  console.log('FIGHT!')\n}\nlet fightRobotArmy2F = (robots: {\n  count: number\n  type: string\n  magic?: string\n}): void => {\n  console.log('FIGHT!')\n}\n\n// *** Class\nclass Animal {\n  constructor(private sound: string) {}\n  greet(): string {\n    return 'Hello, ' + this.sing\n  }\n}\n\nlet lion = new Animal('Lion')\nlion.greet() // Displays 'Hello, Lion'\n\n//In TypeScript, there are several places where type inference\n//is used to provide type information when there is no explicit\n//type annotation. For example, in this code\nlet x = 3\n// automatically detects x is a number.\n\n// Union Type\nlet confused: string | number = 'hello'\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}}}]);