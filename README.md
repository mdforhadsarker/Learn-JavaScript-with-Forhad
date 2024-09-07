# JavaScript Interview Questions and Answers

This document provides a comprehensive list of JavaScript interview questions and answers with examples.

## 1. What is JavaScript?

JavaScript is a high-level, interpreted programming language used to make web pages interactive. It runs in browsers and can manipulate the DOM, handle events, and perform asynchronous tasks.

```javascript
console.log("Hello, World!");
```

---

## 2. What are the data types supported by JavaScript?

JavaScript supports the following data types:

- **Primitive types**: `Number`, `String`, `Boolean`, `Null`, `Undefined`, `Symbol`, `BigInt`
- **Non-primitive types**: `Object` (including arrays, functions)

```javascript
let num = 10; // Number
let str = "Hello"; // String
let isActive = true; // Boolean
let user = { name: "John" }; // Object
```

---

## 3. What is the difference between `let`, `const`, and `var`?

- `var`: function-scoped, can be re-declared and updated.
- `let`: block-scoped, can be updated but not re-declared in the same scope.
- `const`: block-scoped, cannot be updated or re-declared.

```javascript
var x = 1;
let y = 2;
const z = 3;
```

---

## 4. Explain how `==` and `===` differ.

- `==`: checks equality with type coercion (converts types if necessary).
- `===`: checks strict equality (no type conversion).

```javascript
5 == "5"; // true (type coercion)
5 === "5"; // false (no type coercion)
```

---

## 5. What is a closure?

A closure is a function that retains access to variables from its outer function even after the outer function has finished executing.

```javascript
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
```

---

## 6. What is hoisting?

Hoisting is the default behavior of moving variable and function declarations to the top of their scope during compilation.

```javascript
console.log(a); // undefined (hoisted)
var a = 5;
```

---

## 7. Explain the concept of "this" in JavaScript.

`this` refers to the object that is executing the current function. It changes depending on how a function is called.

```javascript
const obj = {
  name: "Alice",
  getName: function () {
    return this.name;
  },
};
console.log(obj.getName()); // Alice
```

---

## 8. What are JavaScript prototypes?

JavaScript prototypes are a mechanism by which objects inherit properties and methods from another object.

```javascript
function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function () {
  console.log("Hello, " + this.name);
};
const person1 = new Person("John");
person1.sayHello(); // Hello, John
```

---

## 9. What is the difference between `null` and `undefined`?

- `null`: explicitly represents the absence of a value.
- `undefined`: indicates a variable that has been declared but not initialized.

```javascript
let a;
let b = null;
console.log(a); // undefined
console.log(b); // null
```

---

## 10. How does JavaScript handle asynchronous operations?

JavaScript handles asynchronous operations using callbacks, promises, and `async/await`.

```javascript
setTimeout(() => console.log("Asynchronous"), 1000);
```

---

## 11. What is a promise?

A promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success!"), 1000);
});
promise.then((result) => console.log(result)); // Success!
```

---

## 12. What are async/await functions?

`async/await` is a syntactic sugar over promises that allows you to write asynchronous code in a synchronous style.

```javascript
async function fetchData() {
  let response = await fetch("https://api.example.com");
  let data = await response.json();
  console.log(data);
}
fetchData();
```

---

## 13. Explain event delegation in JavaScript.

Event delegation is the process of attaching a single event listener to a parent element to handle events on its child elements, leveraging event bubbling.

```javascript
document.getElementById("parent").addEventListener("click", (event) => {
  if (event.target.matches("button")) {
    console.log("Button clicked");
  }
});
```

---

## 14. What are JavaScript modules?

JavaScript modules are reusable pieces of code that can be exported from one file and imported into another.

```javascript
// math.js
export const add = (a, b) => a + b;

// app.js
import { add } from "./math.js";
console.log(add(2, 3)); // 5
```

---

## 15. How can you prevent a function from being called multiple times?

Use a debounce function or a flag to prevent multiple calls.

```javascript
function debounce(fn, delay) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(fn, delay);
  };
}
```

---

## 16. What is the event loop?

The event loop is responsible for handling asynchronous callbacks in JavaScript. It checks the call stack and the message queue, executing callbacks when the call stack is empty.

```javascript
console.log("Start");
setTimeout(() => console.log("Async Task"), 0);
console.log("End");
// Output: Start, End, Async Task
```

---

## 17. What is the difference between `apply()` and `call()` methods?

Both are used to call a function with a given `this` context, but `apply()` takes arguments as an array, while `call()` takes arguments separately.

```javascript
function greet(greeting, name) {
  console.log(greeting + ", " + name);
}
greet.call(null, "Hello", "Alice"); // Hello, Alice
greet.apply(null, ["Hello", "Bob"]); // Hello, Bob
```

---

## 18. What is `bind()` method used for?

`bind()` creates a new function that, when called, has its `this` context set to a provided value.

```javascript
const person = {
  name: "John",
  greet: function () {
    console.log("Hello, " + this.name);
  },
};
const greet = person.greet.bind({ name: "Alice" });
greet(); // Hello, Alice
```

---

## 19. What is a JavaScript event loop?

The event loop is the mechanism that allows JavaScript to perform non-blocking I/O operations, even though JavaScript is single-threaded.

---

## 20. Explain the concept of "event bubbling" and "event capturing".

- **Event bubbling**: events propagate from the innermost target element up through the DOM tree.
- **Event capturing**: events are handled from the outermost element to the innermost.

```javascript
document
  .getElementById("child")
  .addEventListener("click", () => console.log("Child clicked"), false); // Bubbling
document
  .getElementById("parent")
  .addEventListener("click", () => console.log("Parent clicked"), true); // Capturing
```

---

## 21. What is the difference between `deep copy` and `shallow copy`?

- **Shallow copy**: copies only the immediate properties (nested objects are referenced).
- **Deep copy**: copies all levels of an object.

```javascript
let obj = { a: 1, b: { c: 2 } };
let shallowCopy = { ...obj };
shallowCopy.b.c = 3;
console.log(obj.b.c); // 3 (nested object is shared)
```

---

## 22. What are generator functions?

Generator functions allow you to yield multiple values over time using the `yield` keyword. They can be paused and resumed.

```javascript
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = generator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
```

---

## 23. What is the `new` keyword used for?

The `new` keyword is used to create instances of a user-defined object type or a constructor function.

```javascript
function Person(name) {
  this.name = name;
}
const person = new Person("John");
console.log(person.name); // John
```

### 24. How do JavaScript’s `setTimeout` and `setInterval` work?

- **`setTimeout()`**: Executes a function once after a specified delay (in milliseconds).
- **`setInterval()`**: Executes a function repeatedly at specified intervals (in milliseconds).

```javascript
// setTimeout
setTimeout(() => console.log("This runs after 2 seconds"), 2000);

// setInterval
setInterval(() => console.log("This runs every 1 second"), 1000);
```

### 25. What is a `WeakMap` and how is it different from a `Map`?

- **`Map`**: Holds key-value pairs where the keys can be any data type, and it maintains references to the objects.
- **`WeakMap`**: Only accepts objects as keys and does not prevent garbage collection if the key object is no longer referenced elsewhere. The key-value pairs in a `WeakMap` are not enumerable.

```javascript
let map = new Map();
let weakMap = new WeakMap();

let obj = { name: "John" };
map.set(obj, "Value");
weakMap.set(obj, "Value");

obj = null; // obj is eligible for garbage collection in WeakMap but not in Map
```

### 26. What is a `Set` in JavaScript?

A **`Set`** is a collection of unique values. It does not allow duplicate values and provides methods like `add()`, `delete()`, and `has()`.

```javascript
let set = new Set();
set.add(1);
set.add(2);
set.add(1); // Duplicate values are ignored
console.log(set); // Set { 1, 2 }
```

### 27. What is `Object.create()` used for?

`Object.create()` is used to create a new object with a specified prototype and properties. It allows you to set the prototype of the new object.

```javascript
const proto = {
  greet() {
    return "Hello";
  },
};
const obj = Object.create(proto);
console.log(obj.greet()); // Hello
```

### 28. How does JavaScript’s garbage collection work?

JavaScript's garbage collection uses an algorithm called **mark-and-sweep**. It identifies objects that are still reachable and marks them as "in use." Objects that are unreachable are automatically deleted, freeing up memory.

### 29. What are "decorators" in JavaScript?

Decorators are a proposal for JavaScript that provide a way to modify classes and their properties in a declarative way. They are not yet part of the standard, but are used in frameworks like Angular.

```javascript
function log(target) {
  console.log(`${target.name} was created`);
}

@log
class MyClass {
  constructor() {
    this.name = "Decorated Class";
  }
}
// Logs: "MyClass was created"
```

### 30. Explain the difference between `prototype` and `__proto__`.

- **`prototype`**: A property of constructor functions used to define methods and properties that are shared among all instances.
- **`__proto__`**: An object property that points to the prototype of an object.

```javascript
function Person() {}
Person.prototype.greet = function () {
  console.log("Hello");
};

let person = new Person();
person.__proto__ === Person.prototype; // true
```

### 31. What is the purpose of `Object.assign()`?

`Object.assign()` is used to copy the values of all enumerable properties from one or more source objects to a target object.

```javascript
let target = { a: 1 };
let source = { b: 2, c: 3 };
Object.assign(target, source);
console.log(target); // { a: 1, b: 2, c: 3 }
```

### 32. What are "template literals"?

Template literals allow embedded expressions and multiline strings using backticks (`` ` ``). They also support placeholders using `${}`.

```javascript
let name = "John";
let greeting = `Hello, ${name}!`; // Embedded expression
console.log(greeting); // Hello, John!
```

### 33. What is the `spread` operator?

The spread operator (`...`) expands an iterable (like an array) into individual elements. It can also be used to create shallow copies of arrays and objects.

```javascript
let arr = [1, 2, 3];
console.log(...arr); // 1 2 3

let obj = { a: 1 };
let newObj = { ...obj, b: 2 };
console.log(newObj); // { a: 1, b: 2 }
```

### 34. What is the `rest` parameter?

The `rest` parameter (`...`) allows you to represent an indefinite number of arguments as an array in function definitions.

```javascript
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3)); // 6
```

### 35. Explain the `for...of` loop.

The `for...of` loop is used to iterate over iterable objects (like arrays, strings, maps, sets) and returns the values of each element.

```javascript
let arr = [10, 20, 30];
for (let value of arr) {
  console.log(value); // 10, 20, 30
}
```

### 36. What are `async` and `await` keywords used for?

The `async` and `await` keywords are used to work with promises in a more synchronous way. An `async` function returns a promise, and `await` is used to wait for the promise to resolve.

```javascript
async function fetchData() {
  let response = await fetch("https://api.example.com");
  let data = await response.json();
  console.log(data);
}
fetchData();
```

### 37. What is `Symbol` used for in JavaScript?

`Symbol` is a unique and immutable data type used to create unique property keys, often used for object properties to avoid naming conflicts.

```javascript
const sym1 = Symbol("key");
const obj = { [sym1]: "value" };
console.log(obj[sym1]); // value
```

### 38. How do you create a class in JavaScript?

You can create a class using the `class` keyword in ES6. A class can have a constructor, methods, and static methods.

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, ${this.name}`);
  }
}

let person = new Person("John");
person.greet(); // Hello, John
```

### 39. What is destructuring in JavaScript?

Destructuring allows you to unpack values from arrays or properties from objects into distinct variables.

```javascript
let [a, b] = [1, 2];
console.log(a, b); // 1 2

let { name, age } = { name: "Alice", age: 25 };
console.log(name, age); // Alice 25
```

### 40. What is the `Proxy` object?

The `Proxy` object allows you to create a proxy for another object, which can intercept and redefine fundamental operations such as property access, assignment, and function invocation.

```javascript
let target = {};
let proxy = new Proxy(target, {
  get: function (obj, prop) {
    return prop in obj ? obj[prop] : "Property does not exist";
  },
});
proxy.name = "John";
console.log(proxy.name); // John
console.log(proxy.age); // Property does not exist
```

---

## License

This repository is open-sourced and can be freely used for educational purposes.
