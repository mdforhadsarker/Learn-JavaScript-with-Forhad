
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
let num = 10;  // Number
let str = "Hello";  // String
let isActive = true;  // Boolean
let user = { name: "John" };  // Object
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
5 == "5";  // true (type coercion)
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
  getName: function() {
    return this.name;
  }
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
Person.prototype.sayHello = function() {
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
promise.then(result => console.log(result)); // Success!
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
import { add } from './math.js';
console.log(add(2, 3)); // 5
```

---

## 15. How can you prevent a function from being called multiple times?
Use a debounce function or a flag to prevent multiple calls.

```javascript
function debounce(fn, delay) {
  let timeout;
  return function() {
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
  greet: function() {
    console.log("Hello, " + this.name);
  }
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
document.getElementById("child").addEventListener("click", () => console.log("Child clicked"), false); // Bubbling
document.getElementById("parent").addEventListener("click", () => console.log("Parent clicked"), true); // Capturing
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

---

## License
This repository is open-sourced and can be freely used for educational purposes.
