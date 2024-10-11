/*
* You are climbing a staircase. It takes n steps to reach the top.
* Each time you can either climb 1 or 2 steps.
* In how many distinct ways can you climb to the top?
* LeetCode: https://leetcode.com/problems/climbing-stairs/description/?envType=problem-list-v2&envId=dynamic-programming
*/

function climbStairs(n) {
  // Base Cases
    if (n === 0 || n === 1) return 1;

    let ways_0 = 1;  // Ways to reach step 0
    let ways_1 = 1;  // Ways to reach step 1
    let ways_n;      // Final number of ways to reach step n

    for (let i = 2; i <= n; i++) {
      // Current ways to reach step i
        ways_n = ways_0 + ways_1;
      // Move one step forward by updating the previous 2 steps
        ways_0 = ways_1;
        ways_1 = ways_n;
    }

    return ways_n;
}


function climbStairs2(n,memo = {}) {
    // Check if result is already cached
    if (n in memo) return memo[n];

    // Base cases
    if (n === 0 || n === 1) return 1;

    // Recursive case with memoization
    memo[n] = climbStairs(n - 1,memo) + climbStairs(n - 2,memo);

    return memo[n];
}

console.log(climbStairs2(1145));  // This will be very worse
console.log(climbStairs(1145));  // This will be very fast
