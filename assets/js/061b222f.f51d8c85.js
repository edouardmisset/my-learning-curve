"use strict";(self.webpackChunkmy_learning_curve=self.webpackChunkmy_learning_curve||[]).push([[8249],{2979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>y,toc:()=>h});var s=n(5893),r=n(1151),i=n(9286);const p="export type ObjectType<T = any> = Record<string, T>\n\nexport type Value = string | number | boolean | null | undefined\nexport type DefinedValue = string | number | boolean\n\n/**\n * Constructs a type by overriding some properties of an original type with properties from another type.\n *\n * This type helper uses the `Omit` and `keyof` utility types from TypeScript.\n * It first omits the keys of the `OverrideType` from the `OriginalType`, and then combines the result with the `OverrideType`.\n * This means that properties in the `OverrideType` will override properties in the `OriginalType`.\n *\n * @template OriginalType The original type.\n * @template OverrideType The type that should override properties in the original type.\n *\n * @example\n * type Person = {\n *   name: string;\n *   age: number;\n * };\n *\n * type Employee = {\n *   age: string;\n *   company: string;\n * };\n *\n * type EmployeePerson = Override<Person, Employee>;\n * // Equivalent to: { name: string; age: string; company: string; }\n */\nexport type Override<OriginalType, OverrideType> = Omit<\n  OriginalType,\n  keyof OverrideType\n> &\n  OverrideType\n\n/**\n * Constructs a type by making some properties of an existing type required.\n *\n * This type helper uses the `Omit`, `Pick`, and `Required` utility types from TypeScript.\n * It first omits the specified keys from the original type, and then makes those keys required.\n *\n * @template T The original type.\n * @template Key The keys of the properties that should be made required. It extends `keyof T`, which means it can be any key of `T`. The default value is `keyof T`, which means all keys of `T`.\n *\n * @example\n * type Person = {\n *   name: string;\n *   age?: number;\n * };\n *\n * type PersonWithRequiredAge = RequireKey<Person, 'age'>;\n * // Equivalent to: { name: string; age: number; }\n */\nexport type RequireKey<T extends object, Key extends keyof T = keyof T> = Omit<\n  T,\n  Key\n> &\n  Required<Pick<T, Key>>\n\n/**\n * Constructs a type by making some properties of an existing type optional.\n *\n * This type helper uses the `Omit` and `Partial` utility types from TypeScript.\n * It first omits the specified keys from the original type, and then makes those keys optional.\n *\n * @template T The original type.\n * @template K The keys of the properties that should be made optional. It extends `keyof T`, which means it can be any key of `T`. The default value is `keyof T`, which means all keys of `T`.\n *\n * @example\n * type Person = {\n *   name: string;\n *   age: number;\n * };\n *\n * type PersonWithOptionalAge = PartialProperty<Person, 'age'>;\n * // Equivalent to: { name: string; age?: number; }\n */\nexport type PartialProperty<\n  T extends object,\n  K extends keyof T = keyof T,\n> = Omit<T, K> & Partial<Pick<T, K>>\n\n/**\n * Constructs a type by excluding `null` from the possible values of some properties of an existing type.\n *\n * This type helper uses the `Exclude` utility type from TypeScript.\n * It iterates over the keys of the original type, and for each key, it creates a new type that excludes `null` from the possible values of that property.\n *\n * @template T The original type. It extends `object`, which means it can be any object type.\n * @template K The keys of the properties that should exclude `null`. It extends `keyof T`, which means it can be any key of `T`. The default value is `keyof T`, which means all keys of `T`.\n *\n * @example\n * type Person = {\n *   name: string | null;\n *   age: number | null;\n * };\n *\n * type PersonWithoutNull = NotNullProperty<Person>;\n * // Equivalent to: { name: string; age: number; }\n */\nexport type NotNullProperty<T extends object, K extends keyof T = keyof T> = {\n  [P in K]: Exclude<T[K], null>\n}\n\n/**\n * A TypeScript type alias called `Prettify`.\n * It takes a type as its argument and returns a new type that has the same properties as the original type,\n * but the properties are not intersected. This means that the new type is easier to read and understand.\n */\nexport type Prettify<T> = {\n  [K in keyof T]: T[K]\n} & {}\n\n/**\n * Constructs a type consisting of the values of the properties of an existing type.\n *\n * This type helper uses the `keyof` and indexed access (`[]`) types from TypeScript.\n * It creates a new type that includes the types of all values of the properties of the original type.\n *\n * @template T The original type.\n *\n * @example\n * type Person = {\n *   name: string;\n *   age: number;\n * };\n *\n * type PersonValues = ObjectValues<Person>;\n * // Equivalent to: string | number\n */\nexport type ObjectValues<T> = T[keyof T]\n\n// This code snippet defines a function called `objectKeys` that takes an object as input and returns an array of its keys. It ensures that the TypeScript compiler knows the keys are of type `keyof T`, not just `string`.\n/**\n * Returns an array of the keys of an object.\n *\n * This function uses the `Object.keys` method from JavaScript, and then casts the result to `(keyof T)[]`.\n * This ensures that the TypeScript compiler knows that the keys are of type `keyof T`, not just `string`.\n *\n * @template T The type of the object. It extends `ObjectType`, which means it can be any object type.\n *\n * @param {T} object The object to get the keys from.\n *\n * @returns {(keyof T)[]} An array of the keys of the object.\n *\n * @example\n * const person = { name: 'Alice', age: 25 };\n * const keys = objectKeys(person); // ['name', 'age']\n */\nexport const objectKeys = <T extends ObjectType>(object: T): (keyof T)[] =>\n  Object.keys(object) as (keyof T)[]\n",o={},a="Type Helpers",y={id:"snippets/Typescript/type-helpers",title:"Type Helpers",description:"",source:"@site/docs/snippets/Typescript/type-helpers.mdx",sourceDirName:"snippets/Typescript",slug:"/snippets/Typescript/type-helpers",permalink:"/my-learning-curve/docs/snippets/Typescript/type-helpers",draft:!1,unlisted:!1,editUrl:"https://github.com/edouardmisset/my-learning-curve/tree/main/docs/snippets/Typescript/type-helpers.mdx",tags:[],version:"current",frontMatter:{},sidebar:"snippetsSidebar",previous:{title:"Throttle & Debounce Functions",permalink:"/my-learning-curve/docs/snippets/Typescript/throttle-debounce"}},l={},h=[];function c(e){const t={h1:"h1",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"type-helpers",children:"Type Helpers"}),"\n",(0,s.jsx)(i.Z,{language:"ts",children:p})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);