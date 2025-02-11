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

// Function to find the number of distinct ways to climb n steps using matrix exponentiation
const climbStairs = (n) => {
  if (n === 0) return 1; // Base case: 1 way to stay at the ground
  if (n === 1) return 1; // Base case: 1 way to reach the first step

  const baseMatrix = [
    [1, 1],
    [1, 0]
  ];

  // We need F(n+1) Fibonacci number for climbStairs(n), so calculate matrix^n
  const resultMatrix = matrixPower(baseMatrix, n);

  return resultMatrix[0][0]; // This will be F(n+1), i.e., the number of distinct ways to reach n steps
}

// Test Case:

console.log(climbStairs(2));  // Output: 2 ways
console.log(climbStairs(3));  // Output: 3 ways
console.log(climbStairs(4));  // Output: 5 ways
console.log(climbStairs(5));  // Output: 8 ways