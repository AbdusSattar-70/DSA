/*
 * Description:
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 * LeetCode: https://leetcode.com/problems/palindrome-number/description/
 */

interface IsPalindrome {
  (x: number): boolean;
}

// Approach 1: reverse the number using toString method
/* const isPalindrome: IsPalindrome = (x) => {
  // negetive number / floating number / not zero itself but number ending with zero is not a palindrom.
  if (x < 0 || !Number.isInteger(x) || (x % 10 === 0 && x !== 0)) return false;
  // single digit always a palindrome.
  if (x >= 0 && x < 10) return true;

  const numberStr = String(x);
  const reversedStr = numberStr.split("").reverse().join("");
  const reversedNum = parseInt(reversedStr, 10);
  return reversedNum === x;

}; */

// Approach 2: Best one, without converting to String
const isPalindrome: IsPalindrome = (x) => {
  // negetive number / floating number / not zero itself but number ending with zero is not a palindrom.
  if (x < 0 || !Number.isInteger(x) || (x % 10 === 0 && x !== 0)) return false;
  // single digit always a palindrome.
  if (x >= 0 && x < 10) return true;

  let reversedNum = 0;
  while (x > reversedNum) {
    // add last digit to reversedNum from x
    const lastDigit = x % 10;
    reversedNum = reversedNum * 10 + lastDigit;
    // remove last digit from x
    x = Math.floor(x / 10);
  }

  // Check if x is equal to reversedNum (for even-length)
  // or if x is equal to reversedNum with the middle digit removed (for odd-length)
  return x === reversedNum || x === Math.floor(reversedNum / 10);
};

// Test case:
console.log(isPalindrome(-12321)); // false
console.log(isPalindrome(12321.435)); // false
console.log(isPalindrome(1238990)); // false
console.log(isPalindrome(0)); // true
console.log(isPalindrome(10)); // false
console.log(isPalindrome(12321)); // true
