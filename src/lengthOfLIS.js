/**
 * Problem: Longest Increasing Subsequence (LIS)
 * Description: Given an unsorted array of integers,
 * find the length of the longest increasing subsequence.
 * A subsequence is a sequence that can be derived from
 * the array by deleting some elements without
 * changing the order of the remaining elements.

*/

function lengthOfLIS(nums) {
  const tails = []; // Array to store the smallest tail for increasing subsequences

  for (const num of nums) {
    let left = 0, right = tails.length;

    // Binary search for the insertion point of num in tails
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (tails[mid] < num) {
        left = mid + 1; // Move to the right half
      } else {
        right = mid; // Move to the left half
      }
    }

    // If left is equal to the length of tails, it means num is greater than all elements
    // Otherwise, we replace tails[left] with num
    if (left === tails.length) {
      tails.push(num);
    } else {
      tails[left] = num; // Update the tail value
    }
  }

  return tails.length; // The length of tails is the length of the longest increasing subsequence
}

// Example usage:
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
const length = lengthOfLIS(nums);
console.log(length); // Output: 4
