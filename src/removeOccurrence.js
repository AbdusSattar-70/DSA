/*
Problem: Given two strings s and part, perform the following operation on s until all occurrences of the substring part are removed:
Find the leftmost occurrence of the substring part and remove it from s.
Return s after removing all occurrences of part.
Link: https://leetcode.com/problems/remove-all-occurrences-of-a-substring/description/?envType=daily-question&envId=2025-02-11
*/

const removeOccurrences = (s, part) => {
    const stack = [];
    let partLen = part.length;
    for(let char of s) {
        stack.push(char);
        if(stack.length >= partLen) {
            stack.slice(-partLen).join('') === part ? stack.length -= partLen : null;
        }
    }
    return stack.join('');
};

console.log(removeOccurrences('daabcbaabcbc', "abc"));