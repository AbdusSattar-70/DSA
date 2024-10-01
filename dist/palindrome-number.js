"use strict";
const isPalindrome = (x) => {
    // negetive number / floating number / not zero itself but number ending with zero is not a palindrom.
    if (x < 0 || !Number.isInteger(x) || (x % 10 === 0 && x !== 0))
        return false;
    // single digit always a palindrome.
    if (x >= 0 && x < 10)
        return true;
    // reverse the number using to string method
    const numberStr = String(x);
    const reversedStr = numberStr.split("").reverse().join("");
    const reversedNum = parseInt(reversedStr, 10);
    return reversedNum === x;
};
// Test case:
console.log(isPalindrome(-12321)); // false
console.log(isPalindrome(12321.435)); // false
console.log(isPalindrome(1238990)); // false
console.log(isPalindrome(0)); // true
console.log(isPalindrome(10)); // false
console.log(isPalindrome(12321)); // true
