"use strict";(self.webpackChunkmy_learning_curve=self.webpackChunkmy_learning_curve||[]).push([[134],{8777:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>m,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=t(5893),r=t(1151),i=t(9286);const s="import { DefinedValue, ObjectType, Value } from './type-helpers'\n\nexport const random = (min: number, max: number): number =>\n  min + Math.random() * (max - min + 1)\n\nexport const randomInt = (minInt: number, maxInt: number): number =>\n  minInt + Math.floor(Math.random() * (maxInt - minInt + 1))\n\nconst isObject = (item: unknown): boolean =>\n  item != null && typeof item === 'object'\n\nexport const isEmptyObject = (object: ObjectType): boolean =>\n  object &&\n  Object.keys(object).length === 0 &&\n  Object.getPrototypeOf(object) === Object.prototype\n\nconst isMergeableObject = (item: unknown): boolean =>\n  isObject(item) && !Array.isArray(item)\n\nexport const mergeObjects = <T extends ObjectType>(\n  target: T,\n  ...sources: T[]\n): T => {\n  if (sources.length <= 0) return target\n\n  const source = sources.shift()\n  if (source === undefined) return target\n\n  if (isMergeableObject(target) && isMergeableObject(source)) {\n    Object.keys(source).forEach((key: string) => {\n      if (isMergeableObject(source[key])) {\n        if (target[key] == null) {\n          Object.assign(target, { [key]: {} })\n        }\n        mergeObjects(target[key], source[key])\n      } else {\n        Object.assign(target, { [key]: source[key] })\n      }\n    })\n  }\n\n  return mergeObjects(target, ...sources)\n}\n\nexport const removeNullValues = <Type>(arr: (Type | null)[]): Type[] =>\n  arr.filter((val: Type | null): val is Type => val !== null)\n\nexport const removeNullishValues = <Type>(\n  arr: (Type | undefined | null)[],\n): Type[] =>\n  arr.filter((val: Type | undefined | null): val is Type => val != null)\n\nexport const removeFalsyValues = <Type>(arr: (Type | Value)[]): Type[] =>\n  arr.filter((val): val is Type =>\n    typeof val === 'object' && val != null ? isEmptyObject(val) : val != null,\n  )\n\nexport const isValidNumber = (num: unknown): num is number =>\n  typeof num === 'number' && Number.isFinite(num)\n\nexport const validNumberWithFallback = <T = number>(\n  maybeNumber: unknown,\n  fallbackValue: T,\n): T | number => {\n  if (isValidNumber(maybeNumber)) return maybeNumber\n\n  if (typeof maybeNumber === 'string' && isValidNumber(Number(maybeNumber)))\n    return Number(maybeNumber)\n\n  return fallbackValue\n}\n\nexport const shallowRemoveObjNullishValues = (object: ObjectType): ObjectType =>\n  Object.fromEntries(Object.entries(object).filter(([_, v]) => v != null))\n\n/**\n * @description Takes a string or a Date object. If it's a string, it assumes UTC string format (YYYY-MM-DDTHH:MM)\n * @param {(string | Date)} date\n * @returns {Date}  {Date}\n */\nexport const datification = (date: string | Date): Date =>\n  typeof date === 'string' ? new Date(date) : date\n\n/**\n * Capitalizes the first letter of a word.\n * @param {string} word - The word to be capitalized.\n * @returns {string} - The word with the first letter capitalized.\n */\nexport const capitalize = (word: string): string =>\n  word === '' ? '' : word.charAt(0).toUpperCase() + word.slice(1)\n\n/**\n * Checks if a string is either empty, null, or undefined.\n * @param {undefined | null | string} s - The string to be checked.\n * @returns {boolean} - A boolean value indicating whether the string is empty, null, or undefined.\n */\nexport const isEmptyStringOrNullish = (s: undefined | null | string): boolean =>\n  s == null || s.trim() === ''\n\nexport const addOrRemoveFromList =\n  <T extends DefinedValue>(listOfThings: T[], aThing: T) =>\n  (add: boolean): T[] =>\n    add\n      ? [...listOfThings, aThing]\n      : listOfThings.filter(thing => thing !== aThing)\n\nexport const addWhenAbsentOtherwiseRemove = <T extends DefinedValue>(\n  listOfThings: T[],\n  aThing: T,\n): T[] =>\n  addOrRemoveFromList(listOfThings, aThing)(!listOfThings.includes(aThing))\n\nexport const stringIncludesCaseInsensitive = (\n  string: string,\n  searchString: string,\n): boolean => string.toLowerCase().includes(searchString.toLowerCase())\n\n/**\n * @description Deduplicates an array of objects based on a specified property.\n *\n * @template TObject - The type of objects in the array.\n * @template Key - The type of the property used for deduplication.\n *\n * @param {T[]} array - The array of objects to deduplicate.\n * @param {Key} key - The property used for deduplication.\n *\n * @returns {T[]} - An array containing unique objects based on the specified property.\n *\n * @example\n * const inputArray = [\n *   { id: 1, name: 'John' },\n *   { id: 2, name: 'Jane' },\n *   { id: 1, name: 'John' },\n *   { id: 3, name: 'Doe' },\n * ];\n *\n * const deduplicatedArray = deduplicateObjects(inputArray, 'id');\n * // Result: [\n * //   { id: 1, name: 'John' },\n * //   { id: 2, name: 'Jane' },\n * //   { id: 3, name: 'Doe' },\n * // ]\n */\nexport const deduplicateObjects = <\n  T extends object = ObjectType,\n  Key extends keyof T = keyof T,\n>(\n  array: T[],\n  key: Key,\n): T[] => [...new Map(array.map(object => [object[key], object])).values()]\n\nexport const deduplicateObjectsByAllKeys = <T extends object = ObjectType>(\n  array: T[],\n): T[] => [\n  ...new Map(array.map(object => [JSON.stringify(object), object])).values(),\n]\n\ntype ValueAndRange = {\n  value: number\n  minimum: number\n  maximum: number\n}\n\n/**\n * Clamps the provided value within the specified range.\n * @param {ValueAndRange} options - An object containing the maximum, minimum, and value to be clamped.\n * @param {number} options.maximum - The maximum value of the range.\n * @param {number} options.minimum - The minimum value of the range.\n * @param {number} options.value - The value to be clamped within the range.\n * @returns {number} - The clamped value within the specified range.\n */\nexport const clampValueInRange = ({\n  maximum,\n  minimum,\n  value,\n}: ValueAndRange): number => Math.max(Math.min(value, maximum), minimum)\n\n/**\n * Checks if the provided value is outside the specified limits.\n * @param {IsOutsideLimitsOptions} options - An object containing the maximum, minimum, and value to be checked.\n * @param {number} options.maximum - The maximum value of the limit.\n * @param {number} options.minimum - The minimum value of the limit.\n * @param {number} options.value - The value to be checked against the limits.\n * @returns {boolean} - A boolean value indicating whether the provided value is outside the specified limits.\n */\nexport const isOutsideRange = ({\n  maximum,\n  minimum,\n  value,\n}: ValueAndRange): boolean => value < minimum || maximum < value\n\n/**\n * @description Updates an object in an array in an immutable way.\n *\n * @param {T[]} array - The original array.\n * @param {keyof T} key - The key of the object to be updated.\n * @param {Partial<T>} newData - The new data to be updated.\n * @returns {T[]} - A new array with the specified object updated.\n *\n * @example\n * const inputArray = [\n *   { id: 1, name: 'John' },\n *   { id: 2, name: 'Jane' },\n * ];\n *\n * const updatedArray = updateObjectInArray(inputArray, 'id', { id: 1, name: 'Johnny' });\n * // Result: [\n * //   { id: 1, name: 'Johnny' },\n * //   { id: 2, name: 'Jane' },\n * // ]\n *\n * @remarks\n * This function assumes that the `key` is unique across all objects in the array. If there are multiple objects with the same `key` value, this function will update all of them, which might not be the intended behavior.\n * Lastly, the function assumes that `key` exists in `newData`. If `key` does not exist in `newData`, the function will not update any objects.\n */\nexport const updateObjectInArray = <T extends ObjectType = ObjectType>(\n  array: T[],\n  key: keyof T,\n  newData: Partial<T>,\n): T[] => {\n  if (newData[key] === undefined)\n    throw new Error(`The key ${key.toString()} does not exist in newData`)\n  return array.map(object =>\n    object[key] === newData[key] ? { ...object, ...newData } : object,\n  )\n}\n",o={},m="Helpers",u={id:"snippets/Typescript/helpers",title:"Helpers",description:"",source:"@site/docs/snippets/Typescript/helpers.mdx",sourceDirName:"snippets/Typescript",slug:"/snippets/Typescript/helpers",permalink:"/my-learning-curve/docs/snippets/Typescript/helpers",draft:!1,unlisted:!1,editUrl:"https://github.com/edouardmisset/my-learning-curve/tree/main/docs/snippets/Typescript/helpers.mdx",tags:[],version:"current",frontMatter:{},sidebar:"snippetsSidebar",previous:{title:"Find node in tree",permalink:"/my-learning-curve/docs/snippets/Typescript/find-node-in-tree"},next:{title:"Sets",permalink:"/my-learning-curve/docs/snippets/Typescript/sets"}},l={},p=[];function c(e){const n={h1:"h1",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"helpers",children:"Helpers"}),"\n",(0,a.jsx)(i.Z,{language:"ts",children:s})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}}}]);