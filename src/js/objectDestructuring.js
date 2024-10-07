//  rest operator creates a shallow copy of an array/object
const obj = { a: 1, b: 2, c: 3, d: 4 };
const obj2 = {e:5, f:6, g:7};
const { a, b, ...rest } = obj;
const combineObj = {...obj, ...obj2};
console.log(rest); // { c: 3, d: 4 }
console.log(combineObj); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7 }
