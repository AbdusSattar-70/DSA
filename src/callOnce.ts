/**
 * Given a function fn, return a new function that is identical to
 * the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return
the same result as fn.
Every subsequent time it is called, it should return undefined.

Example 1:
Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
Output: [{"calls":1,"value":6}]
Explanation:
const onceFn = once(fn);
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // undefined, fn was not called
 */

const once = (fn: Function) => {
  let called = false;
  return function (...args: number[]) {
    if (!called) {
      called = true;
      return fn(...args);
    }
    return;
  };
};

let fn = (a: number, b: number, c: number) => a + b + c;
let onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // returns `undefined` without calling fn
