/*
* Given an integer n, find the factorial of the integer;
* Note: 0! and 1! is always  1;

*/
const findFactorial = (n: number): number => {
  let factorial = 1;
  for (let i = 2; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
};

console.log(findFactorial(0)); // 1
console.log(findFactorial(1)); // 1
console.log(findFactorial(5)); // 120
