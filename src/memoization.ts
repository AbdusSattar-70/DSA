// Define a memoize function that takes a function `fn` as an argument
// and returns a memoized version of that function.

const memoize = (
  fn: (...args: number[]) => number
): ((...args: number[]) => number) => {
  // Memoization cache to store results for specific arguments.
  const memo: Record<string, number> = {};

  return (...args) => {
    // Create a key for the memo cache by stringifying the arguments.
    const key = JSON.stringify(args);
    // If the result is already in the cache, return it.
    if (key in memo) return memo[key];

    // Otherwise, call the original function and store the result in the cache.
    const res = fn(...args);
    memo[key] = res;
    return res;
  };
};

// Example function to be memoized that adds all the given arguments.
const add = (...args: number[]): number =>
  args.reduce((acc, cur) => acc + cur, 0);

// Create a memoized version of the `add` function.
const memoizedFn = memoize(add);

// Test the memoized function.
console.log(memoizedFn(2, 3)); // Output: 5
console.log(memoizedFn(2, 3)); // Output: 5 (result from cache)
