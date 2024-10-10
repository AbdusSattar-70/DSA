/*
Given an integer n, return an array ans of length n + 1
such that for each i (0 <= i <= n),
ans[i] is the number of 1's in the binary representation of i.
LeetCode: https://leetcode.com/problems/counting-bits/description/

*/
var countBits = function(n) {
    const ans = new Array(n + 1).fill(0);
    let offset = 1;

    for (let i = 1; i <= n; i++) {
       offset * 2 === i ? offset = i : null;
       ans[i] = 1 + ans[i - offset];
    }

    return ans;
};

console.log(countBits(1050))