"use strict";(self.webpackChunkmy_learning_curve=self.webpackChunkmy_learning_curve||[]).push([[134],{8777:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>y});var a=t(5893),r=t(1151),s=t(9286);const i="import { isPlainObject } from './Object/is-plain-object'\nimport { DefinedValue, ObjectType, Value } from './Type/type-helpers'\n\nexport const isEmptyObject = (object: ObjectType): boolean =>\n  object &&\n  Object.keys(object).length === 0 &&\n  Object.getPrototypeOf(object) === Object.prototype\n\nconst mergeSourceIntoTarget = <Obj extends ObjectType>(\n  target: Obj,\n  source: Obj,\n): void => {\n  for (const key of Object.keys(source)) {\n    if (isPlainObject(source[key])) {\n      if (target[key] == null) {\n        Object.assign(target, { [key]: {} })\n      }\n      mergeObjects(target[key], source[key])\n    } else {\n      Object.assign(target, { [key]: source[key] })\n    }\n  }\n}\n\nexport const mergeObjects = <T extends ObjectType>(\n  target: T,\n  ...sources: T[]\n): T => {\n  while (sources.length > 0) {\n    const source = sources.shift()\n    if (\n      source !== undefined &&\n      isPlainObject(target) &&\n      isPlainObject(source)\n    ) {\n      mergeSourceIntoTarget(target, source)\n    }\n  }\n  return target\n}\n\nexport const removeNullValues = <Type>(arr: (Type | null)[]): Type[] =>\n  arr.filter((val: Type | null): val is Type => val !== null)\n\nexport const removeNullishValues = <Type>(\n  arr: (Type | undefined | null)[],\n): Type[] =>\n  arr.filter((val: Type | undefined | null): val is Type => val != null)\n\nexport const removeFalsyValues = <Type>(arr: (Type | Value)[]): Type[] =>\n  arr.filter((val): val is Type =>\n    typeof val === 'object' && val != null ? isEmptyObject(val) : val != null,\n  )\n\nexport const shallowRemoveObjNullishValues = (object: ObjectType): ObjectType =>\n  Object.fromEntries(Object.entries(object).filter(([_, v]) => v != null))\n\nexport const addOrRemoveFromList =\n  <T extends DefinedValue>(listOfThings: T[], aThing: T) =>\n  (add: boolean): T[] =>\n    add\n      ? [...listOfThings, aThing]\n      : listOfThings.filter(thing => thing !== aThing)\n\nexport const addWhenAbsentOtherwiseRemove = <T extends DefinedValue>(\n  listOfThings: T[],\n  aThing: T,\n): T[] =>\n  addOrRemoveFromList(listOfThings, aThing)(!listOfThings.includes(aThing))\n\n/**\n * @description Deduplicates an array of objects based on a specified property.\n *\n * @template Obj - The type of objects in the array.\n * @template Key - The type of the property used for deduplication.\n *\n * @param {Obj[]} array - The array of objects to deduplicate.\n * @param {Key} key - The property used for deduplication.\n *\n * @returns {Obj[]} - An array containing unique objects based on the specified property.\n *\n * @example\n * const inputArray = [\n *   { id: 1, name: 'John' },\n *   { id: 2, name: 'Jane' },\n *   { id: 1, name: 'John' },\n *   { id: 3, name: 'Doe' },\n * ];\n *\n * const deduplicatedArray = deduplicateObjects(inputArray, 'id');\n * // Result: [\n * //   { id: 1, name: 'John' },\n * //   { id: 2, name: 'Jane' },\n * //   { id: 3, name: 'Doe' },\n * // ]\n */\nexport const deduplicateObjects = <\n  Obj extends object = ObjectType,\n  Key extends keyof Obj = keyof Obj,\n>(\n  array: Obj[],\n  key: Key,\n): Obj[] => [...new Map(array.map(object => [object[key], object])).values()]\n\nexport const deduplicateObjectsByAllKeys = <Obj extends object = ObjectType>(\n  array: Obj[],\n): Obj[] => [\n  ...new Map(array.map(object => [JSON.stringify(object), object])).values(),\n]\n\n/**\n * @description Updates an object in an array in an immutable way.\n *\n * @param {Obj[]} array - The original array.\n * @param {keyof Obj} key - The key of the object to be updated.\n * @param {Partial<Obj>} newData - The new data to be updated.\n * @returns {Obj[]} - A new array with the specified object updated.\n *\n * @example\n * const inputArray = [\n *   { id: 1, name: 'John' },\n *   { id: 2, name: 'Jane' },\n * ];\n *\n * const updatedArray = updateObjectInArray(inputArray, 'id', { id: 1, name: 'Johnny' });\n * // Result: [\n * //   { id: 1, name: 'Johnny' },\n * //   { id: 2, name: 'Jane' },\n * // ]\n *\n * @remarks\n * This function assumes that the `key` is unique across all objects in the array. If there are multiple objects with the same `key` value, this function will update all of them, which might not be the intended behavior.\n * Lastly, the function assumes that `key` exists in `newData`. If `key` does not exist in `newData`, the function will not update any objects.\n */\nexport const updateObjectInArray = <Obj extends ObjectType = ObjectType>(\n  array: Obj[],\n  key: keyof Obj,\n  newData: Partial<Obj>,\n): Obj[] => {\n  if (newData[key] === undefined)\n    throw new Error(`The key ${key.toString()} does not exist in newData`)\n  return array.map(object =>\n    object[key] === newData[key] ? { ...object, ...newData } : object,\n  )\n}\n",o={},p="Helpers",c={id:"snippets/Typescript/helpers",title:"Helpers",description:"",source:"@site/docs/snippets/Typescript/helpers.mdx",sourceDirName:"snippets/Typescript",slug:"/snippets/Typescript/helpers",permalink:"/my-learning-curve/docs/snippets/Typescript/helpers",draft:!1,unlisted:!1,editUrl:"https://github.com/edouardmisset/my-learning-curve/tree/main/docs/snippets/Typescript/helpers.mdx",tags:[],version:"current",frontMatter:{},sidebar:"snippetsSidebar",previous:{title:"Type Helpers",permalink:"/my-learning-curve/docs/snippets/Typescript/Type/type-helpers"}},l={},y=[];function d(e){const n={h1:"h1",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"helpers",children:"Helpers"}),"\n",(0,a.jsx)(s.Z,{language:"ts",children:i})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);