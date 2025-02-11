/*
Create a JavaScript function `balance` that checks if a string containing only brackets is balanced. In this specific context, **"balanced"** means each opening bracket has a corresponding closing bracket, regardless of type. For example, the string "(]" is considered balanced because there is a closing bracket for each opening bracket, despite unmatched types.

### Input
- **string (str):** A string containing only brackets `{`, `}`, `[`, `]`, `(`, `)`.

### Output
- **boolean:** Return `True` if the brackets are balanced (each opening bracket has a closing bracket, regardless of type). Otherwise, return `False`.

**Constraints:**
1. The function should only be tested with the cases provided below.
2. Aim for a solution with constant space complexity, **O(1)** by only using `single variable`.

**Test Cases:**
```Javascript
console.log(balance('{{{}}'))        # Expected output: False
console.log(balance('{{{}}'))        # Expected output: False
console.log(balance('{{{}}'))        # Expected output: False
console.log(balance('{()}'))         # Expected output: True
console.log(balance('[{({})}]'))     # Expected output: True
console.log(balance('[{({})]'))      # Expected output: False
console.log(balance('(]'))           # Expected output: True (balanced but unmatched types, so true)
console.log(balance('[}'))           # Expected output: True (balanced but unmatched types, so true)
console.log(balance('{{{}}}'))       # Expected output: True
```
*/

/*
Hints:
To meet the prompt’s requirement of **O(1)** space by using a single variable, you could use these hints:

1. Instead of counting both open and close brackets separately, maintain a single variable, say `balance`, that:
   - Increments by 1 for every opening bracket.
   - Decrements by 1 for every closing bracket.

2. After processing each character, `balance` should end up at zero for a balanced string. This approach ensures each opening has a matching closing without needing multiple counters.

3. If at any point `balance` is negative, the brackets cannot be balanced because this would imply there are more closing brackets than opening brackets up to that point.

*/

function balance(str) {
  let count = 0;

  for (let char of str) {
    if (char === '(' || char === '{' || char === '[') {
      count++;
    } else if (char === ')' || char === '}' || char === ']') {
      count--;
      if (count < 0) {
        return false; // Found a closing bracket without a matching opening
      }
    }
  }

  return count === 0;
}

console.log(balance('{{{}}')); // Expected output: false
console.log(balance('{{{}}}')); // Expected output: true
console.log(balance('{()}'));   // Expected output: true
console.log(balance('[{({})}]'));   // Expected output: true
console.log(balance('[{({})]'));   // Expected output: false
console.log(balance('(]'));   // Expected output: true
console.log(balance('[}'));   // Expected output: true