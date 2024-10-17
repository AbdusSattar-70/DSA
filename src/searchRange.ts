/**
 * Find First and Last Position of Element in Sorted Array
Given an array of integers nums sorted in non-decreasing order,
find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.
 */

// Helper function to find the first occurrence of the target
const findFirst = (nums: number[], target: number): number => {
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    const mid = Math.floor((high - low) / 2 + low);
    if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1; // continue searching in the left half
    }
  }
  // Check if the target was found
  return nums[low] === target ? low : -1;
};

// Helper function to find the last occurrence of the target
const findLast = (nums: number[], target: number): number => {
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    const mid = Math.floor((high - low) / 2 + low);
    if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1; // continue searching in the right half
    }
  }
  // Check if the target was found
  return nums[high] === target ? high : -1;
};

const searchRange = (nums: number[], target: number): number[] => {
  // Edge case: empty array
  if (nums.length === 0) return [-1, -1];
  // Find the first and last positions of the target
  const firstPos = findFirst(nums, target);
  if (firstPos === -1) return [-1, -1]; // target not found
  const lastPos = findLast(nums, target);

  return [firstPos, lastPos];
};

// Example usage
console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // Output: [3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // Output: [-1, -1]
console.log(searchRange([5, 7, 8, 10], 5)); // Output: [0, 0]
console.log(searchRange([], 8)); // Output: [-1, -1]
