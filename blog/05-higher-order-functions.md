---
authors: ['Edouard']
tags: ['JavaScript', 'Closure', 'Currying', 'Higher Order Functions']
---

# Higher Order Functions

## Introduction

In Javascript, functions are values (first-class citizens). This means that they can be assigned to a variable and/or passed as a value.

```javascript
const random = function () {
  return Math.random()
}

const giveMeRandom = random // assigns random to a variable
```

This single piece of knowledge allows us to write functional programming in this language. In functional programming, we heavily use higher-order functions.

<!-- truncate -->

## The concept

**Higher Order Functions** is simply a function that takes another function as an argument or returns a function.
This is possible because functions are **first class citizens** in JavaScript, which means that they can be passed as arguments, returned from other functions, and stored in variables as objects.

NB: Taking an other function as an argument is often referred as a **callback** function, because it is called back by the higher-order function.

NB 2: Returning a function is often referred as a **currying** function, because it returns a function that takes the remaining arguments.

### Currying and HOF

More on that on a later episode.
Basically, it allows us to write functions that take multiple arguments, and return a function that takes the remaining arguments.
This is often done in order to make a 'specific' function from a 'parent' function.

```javascript
function curry(f) {
  // curry(f) does the currying transform
  return function (a) {
    return function (b) {
      return f(a, b)
    }
  }
}

// usage
function sum(a, b) {
  return a + b
}

const curriedSum = curry(sum)

console.log(curriedSum(1)(2)) // 3
```

NB: ⚠️ Function expression are **NOT** hoisted.

## The power of composition

One of the great advantages of using higher order functions is composition.

We can create smaller functions that only take care of one piece of logic. Then, we compose more complex functions by using different smaller functions.

This technique reduces bugs and makes our code easier to read, understand and maintain.

Below is an example of composition.

Given a sample array of numbers, we want to get:

- The average grade of this classroom
- The average grade for the boys
- The average grade for the girls
- The highest & lowest grade for the boys
- The highest & lowest grade for the girls

```javascript
// The data set
const grades = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
]

// The pure (simple) functions
const isBoy = student => student.sex === 'M'

const isGirl = student => student.sex === 'F'

const getBoys = grades => grades.filter(isBoy)

const getGirls = grades => grades.filter(isGirl)

const average = grades =>
  grades.reduce((acc, current) => acc + current.grade, 0) / grades.length

const maxGrade = grades => Math.max(...grades.map(student => student.grade))

const minGrade = grades => Math.min(...grades.map(student => student.grade))

const classroomAverage = average(grades) // 10.2
const boysAverage = average(getBoys(grades)) // 7
const girlsAverage = average(getGirls(grades)) // 13.4
const highestGrade = maxGrade(grades) // 18
const lowestGrade = minGrade(grades) // 2
const highestBoysGrade = maxGrade(getBoys(grades)) // 16
const lowestBoysGrade = minGrade(getBoys(grades)) // 2
const highestGirlsGrade = maxGrade(getGirls(grades)) // 18
const lowestGirlsGrade = minGrade(getGirls(grades)) // 9
```

The outer functions, average for example, always take as an input the output from the inner functions. Therefore, the only condition to composition is to make sure that the output and input match (⚠️ type checking).

And because each function is responsible for only one thing, it makes this code easier to debug and to test.

## HOFs in practice

See the following TypeScript array snippets:

- Filter
- Sort
- Find

## Sources

- Eloquent Javascript on [higher order](https://eloquentjavascript.net/05_higher_order.html)
- Dam Cosset from dev.to on [higher order functions in javascript](https://dev.to/damcosset/higher-order-functions-in-javascript-4j8b)
- Alex Devero on [HOF in JS](https://blog.alexdevero.com/higher-order-functions-javascript/)
- Javascript.info on [Currying](https://javascript.info/currying-partials)
