"use strict";
const reverseNums = (num) => {
    let reversed = 0;
    while (num !== 0) {
        reversed = reversed * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    return reversed;
};
console.log(reverseNums(987654321)); // Output: 123456789
