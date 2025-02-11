"""
I received a Python problem-solving assignment from my teacher, but I struggled with the strict requirements. I need help solving it.

### Problem Description and Constraints
Given an integer `x`:
1. Return "Palindrome" if `x` is a palindrome, and "Not a palindrome" otherwise.
2. **Only create one variable inside the function.**(You can use input variable `x` but only assign/create one additional variable by you)
3. **Do not convert the integer to a string.**

I tried solving it, but I couldn't meet the requirement to use only one variable. Could you help me with a solution?

### My Attempted Solution (Rejected by Teacher):
```python
def is_palindrome(number):
    # Convert the integer to a string
    num_str = str(number)

    # Check if the string is the same forwards and backwards
    return num_str == num_str[::-1]
```

My solution was rejected because it doesn't strictly meet the `string conversion` requirement. Could you help craft a solution that adheres to these constraints?
 """

"""
Hints:
You can utilize the input variable since it's obvious to use (and not counted as one you created). Consider creating only one additional variable inside the function that you define. This way, you’ll create only one variable while taking advantage of the input variable, which does not count as one you created.
"""
def is_palindrome(x: int) -> str:
    # Check if x is a valid input:
    # (1) Negative numbers can't be palindromes
    # (2) # (2) Numbers ending with 0 can't be palindromes unless the number is 0 itself
    if x < 0 or (x % 10 == 0 and x != 0):
        return "Not a palindrome"

    # Initialize reversed number (only one variable creation)
    reversed_num = 0
    # Reverse half of the number
    while x > reversed_num:
        reversed_num = reversed_num * 10 + x % 10
        x //= 10

    # Check if the original number (or its half) is equal to the reversed number
    return "Palindrome" if x == reversed_num or x == reversed_num // 10 else "Not a palindrome"


print(is_palindrome(10)) # Not a palindrome
print(is_palindrome(121)) # Palindrome
print(is_palindrome(-121)) # Not a palindrome
print(is_palindrome(0)) # Palindrome (single digit always palindrome)
print(is_palindrome(9)) # Palindrome (single digit always palindrome)
