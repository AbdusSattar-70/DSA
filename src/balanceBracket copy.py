"""
Create a Python function `balance` that checks if a string containing only brackets is balanced. In this specific context, **"balanced"** means each opening bracket has a corresponding closing bracket, regardless of type. For example, the string "(]" is considered balanced because there is a closing bracket for each opening bracket, despite unmatched types.

### Input
- **string (str):** A string containing only brackets `{`, `}`, `[`, `]`, `(`, `)`.

### Output
- **boolean:** Return `True` if the brackets are balanced (each opening bracket has a closing bracket, regardless of type). Otherwise, return `False`.

**Constraints:**
1. The function should only be tested with the cases provided below.
2. Aim for a solution with constant space complexity, **O(1)** by only using `single variable`.

**Test Cases:**
```python
print(balance('{{{}}'))        # Expected output: False
print(balance('{()}'))         # Expected output: True
print(balance('[{({})}]'))     # Expected output: True
print(balance('[{({})]'))      # Expected output: False
print(balance('(]'))           # Expected output: True (balanced but unmatched types, so true)
print(balance('[}'))           # Expected output: True (balanced but unmatched types, so true)
print(balance('{{{}}}'))       # Expected output: True
```
"""

"""
Hints:
To meet the prompt’s requirement of **O(1)** space by using a single variable, you could use these hints:

1. Instead of counting both open and close brackets separately, maintain a single variable, say `balance`, that:
   - Increments by 1 for every opening bracket.
   - Decrements by 1 for every closing bracket.

2. After processing each character, `balance` should end up at zero for a balanced string. This approach ensures each opening has a matching closing without needing multiple counters.

3. If at any point `balance` is negative, the brackets cannot be balanced because this would imply there are more closing brackets than opening brackets up to that point.

"""
# Sure, Here's the Python function that meets your all requirements:
def balance(string):
    """
    Checks if a string containing only brackets is balanced.
    In this context, "balanced" means each opening bracket has a corresponding closing bracket,
    regardless of type.
    """
    balance_count = 0

    for char in string:
        if char in ('{', '[', '('):
            balance_count += 1
        elif char in ('}', ']', ')'):
            balance_count -= 1
        if balance_count < 0:  # If we encounter more closing than opening brackets
            return False

    return balance_count == 0

# Test Cases
print(balance('{{{}}'))        # Expected output: False
print(balance('{()}'))         # Expected output: True
print(balance('[{({})}]'))     # Expected output: True
print(balance('[{({})]'))      # Expected output: False
print(balance('(]'))           # Expected output: True (balanced but unmatched types, so true)
print(balance('[}'))           # Expected output: True (balanced but unmatched types, so true)
print(balance('{{{}}}'))       # Expected output: True