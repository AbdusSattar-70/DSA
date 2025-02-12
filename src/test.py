def is_palindrome(x):
    # Variable to hold the reversed number
    reversed_num = 0
    original_num = x  # Use the input variable as the original number

    # Handle negative numbers and multiples of 10
    if x < 0 or (x % 10 == 0 and x != 0):
        return "Not palindrome"

    while x > 0:
        # Get the last digit and construct the reversed number
        reversed_num = reversed_num * 10 + x % 10
        x //= 10  # Remove the last digit

    # Check if the original number is equal to the reversed number
    return "Palindrome" if original_num == reversed_num else "Not palindrome"


print(is_palindrome(10)) # Not a palindrome
print(is_palindrome(121)) # Palindrome
print(is_palindrome(-121)) # Not a palindrome
print(is_palindrome(0)) # Palindrome (single digit always palindrome)
print(is_palindrome(9)) # Palindrome (single digit always palindrome)
