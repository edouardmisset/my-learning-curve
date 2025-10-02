---
date: 2021-05-08
title: Typescript types
excerpt: "An introduction to Typescript types."
tags: ['typescript', 'types', 'introduction']
lastUpdated: 2025-10-02
---

## Primitive types

```typescript
// boolean
let isCool: boolean = false

// number
let age: number = 56

// string
let eyeColor: string = 'brown'
let favoriteQuote: string = `I'm not old, I'm only ${age}`

// null and undefined
let meh: undefined = undefined
let noo: null = null
```
<!-- truncate -->

## Complex types

```typescript
// Array
let pets: string[] = ['cat', 'mouse', 'dragon']
let pets2: Array<string> = ['pig', 'lion', 'dragon']

// Tuple
let basket: [string, number]
basket = ['basketball', 10]

// Enum
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}
let sizeName: string = Size[2]
alert(sizeName) // Displays 'Medium' as its value is 2 above

type animals = 'cat' | 'mouse' | 'dragon'

// Any
let whatever: any = 'aaaaghhhhhh noooooo!'

// void
let sing = (): void => console.log('Lalalala')

// never
let error = (): never => {
  throw Error('blah!')
}

// Type Assertion
let ohHiThere: any = 'OH HI THERE'
let stringLength: number = (ohHiThere as string).length

interface CatArmy {
  count: number
  type: string
}

let dog = {} as CatArmy
dog.count = 5

// Interface
interface RobotArmy {
  count: number
  type: string
  magic?: string
}

let fightRobotArmy = (robots: RobotArmy): void => {
  console.log('FIGHT!')
}
let fightRobotArmy2 = (robots: {
  count: number
  type: string
  magic?: string
}): void => {
  console.log('FIGHT!')
}

// Function
let fightRobotArmyF = (robots: RobotArmy): void => {
  console.log('FIGHT!')
}
let fightRobotArmy2F = (robots: {
  count: number
  type: string
  magic?: string
}): void => {
  console.log('FIGHT!')
}

// *** Class
class Animal {
  constructor(private sound: string) {}
  greet(): string {
    return 'Hello, ' + this.sing
  }
}

let lion = new Animal('Lion')
lion.greet() // Displays 'Hello, Lion'

//In TypeScript, there are several places where type inference
//is used to provide type information when there is no explicit
//type annotation. For example, in this code
let x = 3
// automatically detects x is a number.

// Union Type
let confused: string | number = 'hello'
```
