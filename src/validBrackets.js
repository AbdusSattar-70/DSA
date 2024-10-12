/*
* Question-1:
* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 determine if the input string is valid.

* An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.
*/

const isValid = (s) => {
  const stack = [];
  const OPEN_BR = {
    "(": "(",
    "{": "{",
    "[": "]",
  }
  const CLOSING_BR = {
    ")": ")",
    "}": "}",
    "]": "]"
  }
  const MATCHED_BR = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char in OPEN_BR) stack.push(char);

    if (char in CLOSING_BR) {
      // Check if the stack is empty or the top of the stack doesn't match
      if (stack.length === 0 || stack.at(-1) !== MATCHED_BR[char]) return false;
        stack.pop()
    }
  }

  return stack.length === 0;
}

// Test examples
console.log(isValid("({})[]")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("({[)]}")); // false
console.log(isValid("{[()]}")); // true

