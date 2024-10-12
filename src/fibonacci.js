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
* return an object for example: {n-th_fibo: 5, even_count: 2}
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

console.log(getNthFiboAndEvenCount(9));  // Output: {n-th_fibo: 34, even_count: 3}
console.log(getNthFiboAndEvenCount(10)); // Output: {n-th_fibo: 55, even_count: 3}
console.log(getNthFiboAndEvenCount(11)); // Output: {n-th_fibo: 89, even_count: 3}



