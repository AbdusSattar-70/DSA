"use strict";
/* You are given an integer array nums. You are initially positioned
at the array's first index, and each element in the array represents
your maximum jump length at that position.
*/
const canJump = (arr) => {
    let farthest = 0;
    for (let i = 0; i < arr.length; i++) {
        if (farthest < i)
            return false;
        farthest = Math.max(farthest, arr[i] + i);
    }
    return true;
};
console.log(canJump([2, 0, 0])); // true
console.log(canJump([2, 0, 0, 0])); // false
console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([2, 2, 1, 0, 4])); // false
