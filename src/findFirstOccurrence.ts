/**
 * Given two strings needle and haystack, return the index of the
 * first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 */
const findFirstOccurr = (haystack: string, needle: string): number => {
  if (haystack.length < needle.length) return -1;
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) return i;
  }
  return -1;
};

// best solution:
const findFirstOccurr2 = (haystack: string, needle: string): number =>
  haystack.indexOf(needle);

const haystack = "sadbutsad",
  needle = "sad";
const haystack2 = "hello",
  needle2 = "ll";
console.log(findFirstOccurr(haystack2, needle2)); // 2;
/*
Illustration:
For haystack = "hello" and needle = "ll":

At i = 0: haystack.substring(0, 0 + 2) → "he" (not equal to "ll")
At i = 1: haystack.substring(1, 1 + 2) → "el" (not equal to "ll")
At i = 2: haystack.substring(2, 2 + 2) → "ll" (equal to "ll", return 2)
 */
console.log(findFirstOccurr(haystack, needle)); // 0;
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
