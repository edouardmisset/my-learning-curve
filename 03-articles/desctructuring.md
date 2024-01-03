---
tags: ["JavaScript", "ES6", "Destructuring", "Nested Property", "Function Arguments", "Variables Swapping"]
---

# Destructuring Assignment

## The concept

The **destructuring assignment** syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
Available from ES6 (2015) onward.

OR

> Take values from arrays or properties from objects and set them as local variables.
>
> ~ Fireship.io

## Examples

### With arrays

#### The bascis

```javascript
// The basics
const food = ['🥓', '🍕', '🍟', '🍔', '🌮'];
const [bacon, , , , taco] = food;

console.log(bacon, taco); // 🥓 🌮
```

#### Using the spread operator

```javascript
// Using the spread operator
const food = ['🥓', '🍕', '🍟', '🥬', '🥦'];
const [, , , ...noJunkFood] = food;

console.log(noJunkFood); // [ '🥬', '🥦' ]
```

#### Using a default value

```javascript
// Using a default value
const food = [undefined, '🍕', '🍟'];
const [bacon = '🐖', pizza, fries] = food;

console.log(bacon); // 🐖
```

### With objects

#### The basics

```javascript
// The basics
const animals = {
  snake: '🐍',
  monkey: '🐵',
  octopus: '🐙',
};
const { octopus } = animals;

console.log(octopus); // 🐙
```

#### Using the spread operator

```javascript
// Using the spread operator
const animals = {
  snake: '🐍',
  monkey: '🐵',
  octopus: '🐙',
};
const { ...rest } = animals;

console.log(rest); // { snake: '🐍', monkey: '🐵', octopus: '🐙' }

// Overriding a value using the spread operator
const animals = {
  snake: '🐍',
  monkey: '🐵',
  octopus: '🐙',
};
const newAnimals = { ...animals, snake: '🦎' };

console.log(newAnimals); // { snake: '🦎', monkey: '🐵', octopus: '🐙' }
```

#### Using a default value

```javascript
// Using a default value
const animals = {
  snake: '🐍',
  monkey: '🐵',
  octopus: undefined,
};
const { octopus = '🦑' } = animals;

console.log(octopus); // 🦑
```

#### Renaming property

```javascript
// Renaming property
const animals = {
  snake: '🐍',
  monkey: '🐵',
  octopus: '🦑',
};
const { octopus: squid } = animals;

console.log(squid); // 🦑
```

#### Nested property

```javascript
// Nested property
const family = {
  parent: {
    child: '👶',
  },
};
const {
  parent: { child },
} = family;

console.log(child); // 👶
```

#### Desctructuring within function arguments

```javascript
// Desctructuring within function arguments
const user = {
  id: 0,
  name: 'John',
};

function sayHi({ id, name }) {
  console.log(`Hi ${name}!`);
}

sayHi(user); // Hi John!
```

## Bonus

#### Variables swapping

```javascript
// Variables swapping
let a = 'foo';
let b = 'bar';

[a, b] = [b, a];

console.log('a:', a, 'b:', b); // a: bar b: foo
```

#### Computed property name

```javascript
// Computed property name
const rando = randomKey();

const obj = {
  [rando]: 42,
};

const { [rando]: myKey } = obj;
```

#### Conditionally added property / value

```javascript
const trueCondition = true
const falseCondition = false

const obj = {
  ...(trueCondition && { '🐕': 'woof' }),
  ...(falseCondition && { '🐈': 'meow' }),
}

console.log(obj)
// { '🐕': 'woof' }

const arr = [
  ...(trueCondition ? ['🐕'] : []),
  ...(falseCondition ? ['🐈'] : []),
]

console.log(arr)
// [ '🐕' ]
```

## Resources

Introduction by [Fireship.io](https://www.youtube.com/watch?v=UgEaJBz3bjY)

Official documentation on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

Adoption on [CanIUse](https://caniuse.com/mdn-javascript_operators_destructuring)
