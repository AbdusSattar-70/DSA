/*
Question-1:
Given a number n, find the first n elements of the Fibonacci sequence.
*/


const generateFiboSequence = (n) => {
  // Validate input: n must be greater than 0
  if(n <= 0) return "Please provide a number greater than 0";

  // Base cases:
  let fiboSequence = [0, 1];
  if(n === 1) return [0]; // Special case: if n is 1, return only [0]
  if(n === 2) return fiboSequence; // Special case: if n is 2, return [0,1]

  // Generate the Fibonacci sequence for n elements
  for(let i = 2; i < n; i++) {
    fiboSequence.push(fiboSequence[i - 1] + fiboSequence[i - 2]);
  }

  return fiboSequence;
}

// Test Cases:
// console.log(generateFiboSequence(9));  // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21]
// console.log(generateFiboSequence(1));  // Output: [0]
// console.log(generateFiboSequence(0));  // Output: "Please provide a number greater than 0"

/*
Question-2:
Given a number n,
* generate only the n-th fibonacci number of the Fibonacci sequence.
* calculate how many of them are even numbers
* return an object for example: {n-th_fibo: 34, even_count: 3}
* Can you maintain runtime O(log n)?
*/


// Helper function: Multiply two 2x2 matrices
const multiplyMatrices = (a, b) => {
  return [
    [a[0][0] * b[0][0] + a[0][1] * b[1][0], a[0][0] * b[0][1] + a[0][1] * b[1][1]],
    [a[1][0] * b[0][0] + a[1][1] * b[1][0], a[1][0] * b[0][1] + a[1][1] * b[1][1]]
  ];
}

// Helper function: Perform matrix exponentiation (log n)
const matrixPower = (matrix, n) => {
  if (n === 1) return matrix;

  if (n % 2 === 0) {
    const halfPower = matrixPower(matrix, Math.floor(n / 2));
    return multiplyMatrices(halfPower, halfPower);
  } else {
    return multiplyMatrices(matrix, matrixPower(matrix, n - 1));
  }
}

// Function to get the n-th Fibonacci number using matrix exponentiation
const getNthFibo = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  const baseMatrix = [
    [1, 1],
    [1, 0]
  ];

  // Calculate (baseMatrix)^(n-1) to get the n-th Fibonacci number
  const resultMatrix = matrixPower(baseMatrix, n - 1);

  return resultMatrix[0][0]; // This will be F(n)
}

// Main function to generate the n-th Fibonacci and count even numbers
const getNthFiboAndEvenCount = (n) => {
  const nthFibo = getNthFibo(n); // Get the n-th Fibonacci number
  const evenCount = Math.floor(n / 3); // Number of even Fibonacci numbers up to F(n)

  return {
    'n-th_fibo': nthFibo,
    'even_count': evenCount
  };
}

console.log(getNthFiboAndEvenCount(2));  // Output: {n-th_fibo: 1, even_count: 0}
console.log(getNthFiboAndEvenCount(9));  // Output: {n-th_fibo: 34, even_count: 3}
console.log(getNthFiboAndEvenCount(10)); // Output: {n-th_fibo: 55, even_count: 3}
console.log(getNthFiboAndEvenCount(15)); // Output: {n-th_fibo: 144, even_count: 4}


/*

### Background
As part of our algorithms module, I’ve been tasked with writing a **JavaScript program** to work with Fibonacci numbers. Specifically, the program must:
1. Calculate the **n-th Fibonacci number**.
2. Determine how many Fibonacci numbers up to the n-th term are **even**.

**The runtime requirement is O(log n)**, which my teacher emphasized as mandatory. I’ve learned that techniques like matrix exponentiation can help achieve this, but I’m struggling to apply them in a clear, efficient, and maintainable way.

Here’s my current implementation, which is inefficient and doesn’t meet the runtime requirement:

```javascript
// Function to calculate the n-th Fibonacci number
function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1, c;
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

// Function to count even Fibonacci numbers up to the n-th term
function countEvenFibos(n) {
    let count = 0;
    for (let i = 0; i <= n; i++) {
        if (fibonacci(i) % 2 === 0) count++;
    }
    return count;
}

// Combined function
function getFibonacciInfo(n) {
    return {
        "n-th_fibo": fibonacci(n),
        even_count: countEvenFibos(n)
    };
}

console.log(getFibonacciInfo(10));
```

### Task
I know this code works but has several issues:
1. It doesn’t meet the **O(log n)** runtime requirement because it recalculates Fibonacci numbers repeatedly and uses a basic loop-based approach.
2. The **`countEvenFibos` function** recalculates Fibonacci numbers redundantly, making it inefficient and slow.
3. The code could use cleaner organization, better naming, and modularization for clarity.

Could you:
1. **Review the code** and rewrite it to achieve **O(log n)** runtime for both calculating the n-th Fibonacci number and counting the even numbers?
2. Combine the calculations of the n-th Fibonacci number and even count into a single, efficient process.
3. Suggest best practices for structuring the code, improving maintainability, and making it easy to understand?

I’d also appreciate an explanation of the logic used in the optimized solution, especially if it involves techniques like matrix exponentiation.

*/
