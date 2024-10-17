const findTheDifference = (s: string, t: string): string => {
  let sumS = 0,
    sumT = 0;

  // Sum the ASCII values of s
  for (let char of s) {
    sumS += char.charCodeAt(0);
  }

  // Sum the ASCII values of t
  for (let char of t) {
    sumT += char.charCodeAt(0);
  }

  // The difference is the ASCII value of the extra character
  return String.fromCharCode(sumT - sumS);
};

// Test cases
console.log(findTheDifference("abcd", "abcde")); // Output: 'e'
console.log(findTheDifference("", "y")); // Output: 'y'
console.log(findTheDifference("a", "aa")); // Output: 'a'
