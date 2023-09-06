// A happy number is defined by the following process:

// Starting with any positive integer, replace the number by the sum of
// the squares of its digits, and repeat the process until the number equals
// 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy numbers,
// while those that do not end in 1 are unhappy numbers.

// Implement a function that returns true if the number is happy,
//  or false if not.

const findHappyNum = (n) =>{
  let sum = 0;
  while (n > 0) {
    // get rightmost digit of given number
    let digit = n % 10;
    sum += digit * digit;
    // update given num to get next digit
    n = Math.floor(n / 10);
  }
  return sum;
}

const isHappy = (n) =>{
  // to detect cycle
  const seen = new Set();

  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = findHappyNum(n);
  }
  return n === 1;
}

console.log(isHappy(19))