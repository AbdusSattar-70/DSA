/*
Given an integer array nums sorted in non-decreasing order,
remove the duplicates in-place such that each unique element appears only once.
The relative order of the elements should be kept the same.
Then return the number of unique elements in nums.

* Consider the number of unique elements of nums to be k,
to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums
 contain the unique elements in the order they were present in nums initially.
 The remaining elements of nums are not important as well as the size of nums.
Return k.
*/
const removeDuplicates = (nums) => {
  if (nums.length === 0) return 0;
  let pointer_1 = 0;
  for(let i = 1; i < nums.length; i++){
    let pointer_2 = i;
    if(nums[pointer_1] !== nums[pointer_2]) {
      pointer_1++;
      nums[pointer_1] = nums[pointer_2];
    }
  }
  return pointer_1 + 1;
}

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums)) // 5