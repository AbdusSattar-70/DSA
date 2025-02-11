// const isPalindrome = (x) => {
//   // negetive number / floating number / not zero itself but number ending with zero is not a palindrom.
//   if (x < 0 || !Number.isInteger(x) || (x % 10 === 0 && x !== 0)) return "Not a palindrome";
//   // single digit always a palindrome.
//   if (x >= 0 && x < 10) return "Palindrome";

//   let reversedNum = 0;
//   while (x > reversedNum) {
//     // add last digit to reversedNum from x
//     const lastDigit = x % 10;
//     reversedNum = reversedNum * 10 + lastDigit;
//     // remove last digit from x
//     x = Math.floor(x / 10);
//   }

//   // Check if x is equal to reversedNum (for even-length)
//   // or if x is equal to reversedNum with the middle digit removed (for odd-length)
//   return x === reversedNum || x === Math.floor(reversedNum / 10)
//     ? "Palindrome"
//     : "Not a palindrome";

// };


// // Test case:
// console.log(isPalindrome(10)) // Not a palindrome
// console.log(isPalindrome(121)) // Palindrome
// console.log(isPalindrome(-121)) // Not a palindrome
// console.log(isPalindrome(0)) // Palindrome (single digit always palindrome)
// console.log(isPalindrome(9)) // Palindrome (single digit always palindrome)

function fibonacci(n) {
  // Initialize cache as a property of the function itself if it doesn't exist
  if (!fibonacci.cache) {
    fibonacci.cache = {};
  }

  // Check if the result is in cache
  if (fibonacci.cache[n] !== undefined) {
    return fibonacci.cache[n];
  }

  // Base cases
  if (n <= 1) {
    return n;
  }

  // Compute and store the result in cache
  fibonacci.cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
  return fibonacci.cache[n];
}

// Test cases:
console.log(fibonacci(0));  // Output: 0
console.log(fibonacci(3));  // Output: 2
console.log(fibonacci(10));  // Output: 55
