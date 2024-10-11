//  rest/spread operator creates a shallow copy of an array/object
const obj = { a: 1, b: 2, c: 3, d: 4 };
const obj2 = {e:5, f:6, g:7};
const { a, b, ...rest } = obj;
const combineObj = {...obj, ...obj2};
console.log(rest); // { c: 3, d: 4 }
console.log(combineObj); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7 }

const user = {
  userName: 'Ada',
  age: 28,
  city: 'São Paulo',
  grades: {
    math: 9.5,
    portuguese: 9.2,
    chemistry: 10,
    history: 7.5,
    geography: 7.8,
  }
};

const {
  grades: {
    math,
    portuguese,
    chemistry,
    history,
    geography
  }
} = user;

console.log(math) // output: 9.5
console.log(portuguese) // output: 9.2
console.log(chemistry) // output: 10
console.log(history) // output: 7.5
console.log(geography) // output: 7.8


