"""
Given a number n, write a Python function to calculate the n-th Fibonacci number using `memoization`, without explicitly declaring any variables inside or outside the function, and without using an additional parameter (such as fibonacci(n, cache = {})). You are also prohibited to use `hasattr`, `setattr`, and `fibonacci.__dict__`.
### Function signature:
```Python
def fibonacci(n):
#write you code here...
```
* Test cases:
```Python
print(fibonacci(0)) # Output: 0
print(fibonacci(3)) # Output: 2
print(fibonacci(10)) # Output: 55
```
"""

"""
Hints:
Here are some hints to guide your solution:

1. Try setting `fibonacci.cache` as an empty dictionary right after defining the function. This way, the cache is always available whenever the function is called.

2. By initializing `fibonacci.cache` outside of the function, you don’t have to check for its existence within the function itself, making the code simpler and faster.

3. Initializing the cache outside the function avoids the need for using methods like `hasattr`, `setattr`, `fibonacci.__dict__`, or extra variable declarations, all of which may be prohibited by your requirements.
"""

def fibonacci(n):
    if n <= 1:
        return n
    if n in fibonacci.cache:
        return fibonacci.cache[n]
    fibonacci.cache[n] = fibonacci(n-1) + fibonacci(n-2)
    return fibonacci.cache[n]

fibonacci.cache = {}

### Example Usage:
print(fibonacci(0))   # Output: 0
print(fibonacci(3))   # Output: 2
print(fibonacci(10))  # Output: 55

"""
Answer:
Yes, in Python, we can write the memoized Fibonacci function without using `hasattr`, `setattr` or `fibonacci.__dict__` by initializing the cache directly on the function outside of the main logic, like this:

```python
def fibonacci(n):
    if n <= 1:
        return n
    if n in fibonacci.cache:
        return fibonacci.cache[n]
    fibonacci.cache[n] = fibonacci(n-1) + fibonacci(n-2)
    return fibonacci.cache[n]

fibonacci.cache = {}

### Example Usage:
print(fibonacci(0))   # Output: 0
print(fibonacci(3))   # Output: 2
print(fibonacci(10))  # Output: 55

```

### Explanation:

Calculate the n-th Fibonacci number using memoization for efficiency.

This function computes the n-th Fibonacci number by storing previously
calculated Fibonacci values in a cache to avoid redundant calculations.

Parameters:

*   n (int): The index of the Fibonacci sequence to compute (0-based index).

Returns:

*   int: The n-th Fibonacci number.

Memoization:

*   This implementation uses a cache to store calculated values for each
    Fibonacci number. The cache is an attribute of the function itself,
    `fibonacci.cache`, rather than a standalone variable.

    By storing the cache as an attribute, we avoid any explicit variable
    declaration, adhering to constraints that prohibit additional variable
    declarations inside or outside the function.
"""