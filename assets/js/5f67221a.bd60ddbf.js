"use strict";(self.webpackChunkmy_learning_curve=self.webpackChunkmy_learning_curve||[]).push([[16],{622:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>y,toc:()=>d});var o=t(5893),r=t(1151),a=t(9286);const i="/**\n * Transforms an array of objects into an object where the keys are the values of a specified key in the objects,\n * and the values are the objects themselves. If the array is empty, returns undefined.\n *\n * @template Obj - The type of the objects in the array. Must extend Record<string, unknown>.\n * @template Key - The type of the key to use. Must be a key of T.\n * @param {Obj[]} array - The array of objects to transform.\n * @param {Key} key - The key to use for the new object.\n * @returns {undefined | Record<string, Obj>} - The transformed object, or undefined if the array is empty.\n *\n * @example\n * const array = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }];\n * const key = 'id';\n * const keyedObject = keyBy(array, key);\n * console.log(keyedObject); // Outputs: { '1': { id: 1, name: 'Alice' }, '2': { id: 2, name: 'Bob' }, '3': { id: 3, name: 'Charlie' } }\n *\n * @example\n * const emptyArray = [];\n * const key = 'id';\n * const keyedObject = keyBy(emptyArray, key);\n * console.log(keyedObject); // Outputs: undefined\n */\nexport const keyBy = <\n  Obj extends Record<string, unknown>,\n  Key extends keyof Obj,\n>(\n  array: Obj[],\n  key: Key,\n): undefined | Record<string, Obj> =>\n  array.length === 0\n    ? undefined\n    : (Object.fromEntries(\n        array.map(value => [String(key ? value[key] : value), value]),\n      ) as Record<string, Obj>)\n\n/**\n * Transforms a collection (either an array or an object) of objects into an object where the keys are the values of a specified key in the objects,\n * and the values are the objects themselves. If the collection is empty, returns undefined.\n *\n * @template Obj - The type of the objects in the collection. Must extend Record<string, unknown>.\n * @template Key - The type of the key to use. Must be a key of T.\n * @param {Obj[] | Record<string, Obj>} collection - The collection of objects to transform.\n * @param {Key} key - The key to use for the new object.\n * @returns {undefined | Record<string, Obj>} - The transformed object, or undefined if the collection is empty.\n *\n * @example\n * const array = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }];\n * const key = 'id';\n * const keyedObject = collectionKeyBy(array, key);\n * console.log(keyedObject); // Outputs: { '1': { id: 1, name: 'Alice' }, '2': { id: 2, name: 'Bob' }, '3': { id: 3, name: 'Charlie' } }\n *\n * @example\n * const object = { a: { id: 1, name: 'Alice' }, b: { id: 2, name: 'Bob' }, c: { id: 3, name: 'Charlie' } };\n * const key = 'id';\n * const keyedObject = collectionKeyBy(object, key);\n * console.log(keyedObject); // Outputs: { '1': { id: 1, name: 'Alice' }, '2': { id: 2, name: 'Bob' }, '3': { id: 3, name: 'Charlie' } }\n *\n * @example\n * const emptyArray = [];\n * const key = 'id';\n * const keyedObject = collectionKeyBy(emptyArray, key);\n * console.log(keyedObject); // Outputs: undefined\n */\nexport const collectionKeyBy = <\n  Obj extends Record<string, unknown>,\n  Key extends keyof Obj,\n>(\n  collection: Obj[] | Record<string, Obj>,\n  key: Key,\n) =>\n  Array.isArray(collection)\n    ? keyBy(collection, key)\n    : keyBy(Object.values(collection), key)\n\n/**\n * @description Alias for the {@link collectionKeyBy} function.\n */\nexport const normalizeBy = collectionKeyBy\n",s={},c="Normalize an array of object (or collection) by a given key",y={id:"snippets/Typescript/Array/collection-key-by",title:"Normalize an array of object (or collection) by a given key",description:"The keyBy and collectionKeyBy functions can be useful in several scenarios where",source:"@site/docs/snippets/Typescript/Array/collection-key-by.mdx",sourceDirName:"snippets/Typescript/Array",slug:"/snippets/Typescript/Array/collection-key-by",permalink:"/my-learning-curve/docs/snippets/Typescript/Array/collection-key-by",draft:!1,unlisted:!1,editUrl:"https://github.com/edouardmisset/my-learning-curve/tree/main/docs/snippets/Typescript/Array/collection-key-by.mdx",tags:[],version:"current",frontMatter:{},sidebar:"snippetsSidebar",previous:{title:"Array Performances",permalink:"/my-learning-curve/docs/snippets/Typescript/Array/array-performances"},next:{title:"CountBy",permalink:"/my-learning-curve/docs/snippets/Typescript/Array/count-by"}},l={},d=[];function u(e){const n={h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"normalize-an-array-of-object-or-collection-by-a-given-key",children:"Normalize an array of object (or collection) by a given key"}),"\n",(0,o.jsxs)(n.p,{children:["The keyBy and collectionKeyBy functions can be useful in several scenarios where\nyou need to transform a collection of objects into an object for easier access\n(With time complexity: ",(0,o.jsx)(n.strong,{children:"O(1)"}),") or manipulation."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Data Normalization"}),": When you're working with a large dataset, it's often more\nefficient to store the data in a normalized form. For example, if you have an\narray of users, you might want to transform it into an object where the keys are\nuser IDs and the values are the user objects. This allows you to quickly and\neasily look up a user by their ID."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Data Indexing"}),": Similarly, if you're working with a collection of objects\nthat have a unique identifier (like a database ID), you can use these\nfunctions to create an index of the objects by their identifier. This can\nsignificantly speed up operations like searching for an object by its\nidentifier."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Data Aggregation"}),": If you need to aggregate data based on a certain\nproperty, these functions can help. For example, if you have an array of\ntransactions and you want to group them by user ID, you can use keyBy to\ncreate an object where the keys are user IDs and the values are arrays of\ntransactions for each user."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(a.Z,{language:"ts",children:i})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}}}]);