// /*
// Problem: Given two strings s and part, perform the following operation on s until all occurrences of the substring part are removed:
// Find the leftmost occurrence of the substring part and remove it from s.
// Return s after removing all occurrences of part.
// Link: https://leetcode.com/problems/remove-all-occurrences-of-a-substring/description/?envType=daily-question&envId=2025-02-11
// */

// const removeOccurrences = (s, part) => {
//     const stack = [];
//     let partLen = part.length;
//     for(let char of s) {
//         stack.push(char);
//         if(stack.length >= partLen) {
//             stack.slice(-partLen).join('') === part ? stack.length -= partLen : null;
//         }
//     }
//     return stack.join('');
// };

// console.log(removeOccurrences('daabcbaabcbc', "abc"));


var checkForTarget = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        // curr is the current sum
        let curr = nums[left] + nums[right];
        if (curr == target) {
            return true;
        }

        if (curr > target) {
            right--;
        } else {
            left++;
        }
    }

    return false;
}

console.log(checkForTarget([1, 2, 4, 6, 8, 9, 14, 15],19))