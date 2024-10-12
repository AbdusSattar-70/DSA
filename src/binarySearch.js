/*
Given an array of integers nums which is sorted in ascending order,
and an integer target, write a function to search target in nums.
If target exists, then return its index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity.
LeetCode: https://leetcode.com/problems/binary-search/description/
*/

const binarySearch = (nums,target) => {
  if(nums.length === 0) return -1;

  let lowIndex = 0;
  let highIndex = nums.length - 1;
  while(lowIndex <= highIndex){
    let midIndex = Math.floor(lowIndex + (highIndex - lowIndex) / 2);
    if(nums[midIndex] === target) return midIndex;
    if(nums[midIndex] < target){
      lowIndex = midIndex + 1;
    }
    else{
      highIndex = midIndex - 1;
    }
  }

  return -1;
}


const binarySearch2 = (nums,target) => nums.indexOf(target);

// example:
const nums = [1,2,3,5,7,9];
const target = 3;
console.log(binarySearch(nums,target));
console.log(binarySearch2(nums,target));


/*
Important Note:
binarySearch2 can be simple solution but it's time complexity is O(n).
we need O(log n).
*/