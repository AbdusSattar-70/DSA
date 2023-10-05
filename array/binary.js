// Given two binary strings a and b, return their sum as a binary string.
// Example 1:
// Input: a = "11", b = "1"
// Output: "100"
// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"

const addBinary = (a, b) => {
// for store the sum of a and b
  let sum = '';
  // pointer for traversing the binary string from right to left
  let i = a.length - 1;
  let j = b.length - 1;
  // after adding if something have in hand
  let carry = 0;
  //   loop through the each digit of the binary string until finish the string
  while (i >= 0 || j >= 0 || carry) {
    // extract the binary digit and make it integer otherwise 0
    const bitA = i >= 0 ? +a[i] : 0;
    const bitB = j >= 0 ? +b[j] : 0;
    const total = bitA + bitB + carry;
    // convert it binary and add into sum string
    sum = (total % 2) + sum;
    carry = Math.floor(total / 2);
    i -= 1;
    j -= 1;
  }
  return sum;
};

//  using buitl-in method add only two binary string
const addBinaryBuiltIn = (a, b) => (parseInt(a, 2) + parseInt(b, 2)).toString(2);

//  using buitl-in method add any amount of binary string
const addManyBinary = (arr) => {
  let sum = 0;
  arr.forEach((str) => {
    sum += parseInt(str, 2);
  });
  return sum.toString(2);
};

// Example usage:
console.log(addBinary('11', '1')); // Output: "100"
console.log(addBinary('1010', '1011')); // Output: "10101"
console.log(addBinaryBuiltIn('1010', '1011')); // Output: "10101"
console.log(addManyBinary(['11', '1', '1010', '1011'])); // Output: "11001"

const convertDecimal = (str) => {
  let result = 0;
  let i = str.length - 1;
  let power = 0;
  while (i >= 0) {
    result += +str[i] * (2 ** power);
    power += 1;
    i -= 1;
  }
  return result;
};

console.log(convertDecimal('10011'));

const addBinaryTry = (a, b) => (parseInt(a, 2) + parseInt(b, 2)).toString(2);

console.log(addBinaryTry('110', '11')); // 100