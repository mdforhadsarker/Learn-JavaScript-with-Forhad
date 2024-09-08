const mixedArray = [
  "lws",
  undefined,
  "learn with sumit",
  false,
  "",
  "apple",
  40,
  "k",
  true,
  "Thanks all",
  NaN,
];

// const trueArray = mixedArray.filter(function (el) {
//   if (el) {
//     return true;
//   } else {
//     return false;
//   }
// });

const trueArray = mixedArray.filter(Boolean);

console.log(trueArray);

const obj = {
  a: "lws",
  b: undefined,
  c: "learn with sumit",
  d: false,
  e: "",
  f: "apple",
  g: 40,
  h: "k",
  i: true,
  j: "Thanks all",
  k: NaN,
};

const trutyObject = function (obj) {
  for (i in obj) {
    if (!obj[i]) {
      delete obj[i];
    }
  }
  return obj;
};


const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}

console.log(trutyObject(obj));

console.log(text);