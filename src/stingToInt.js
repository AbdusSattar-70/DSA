/**
 * Implement the myAtoi(string s) function, which converts a string to a
 * 32-bit signed integer.
The algorithm for myAtoi(string s) is as follows:

Whitespace: Ignore any leading whitespace (" ").
Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity is neither present.
Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
Return the integer as the final result.
 */

function myAtoi2(s) {
    const INT_MIN = -(2 ** 31);
    const INT_MAX = 2 ** 31 - 1;

    // Step 1: Remove leading whitespace
    s = s.trim();

    // Step 2: Handle empty string
    if (s.length === 0) return 0;

    // Step 3: Determine sign
    let sign = 1;
    let index = 0;
    if (s[0] === '-') {
        sign = -1;
        index++;
    } else if (s[0] === '+') {
        index++;
    }

    // Step 4: Convert digits into integer
    let result = 0;
    while (index < s.length && s[index] >= '0' && s[index] <= '9') {
        const digit = s[index].charCodeAt(0) - '0'.charCodeAt(0);

        // Check for out-of-bounds before updating the result
        if (result > (INT_MAX - digit) / 10) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }

        result = result * 10 + digit;
        index++;
    }

    return result * sign;
}

/*
function myAtoi(s) {
    const INT_MIN = -(2 ** 31);
    const INT_MAX = 2 ** 31 - 1;

    // Step 1: Trim whitespace and match optional sign and digits
    const match = s.trim().match(/^([+-]?\d+)/);

    // Step 2: Convert matched string to a number if it exists, or return 0
    const num = match ? Number(match[0]) : 0;

    // Step 3: Clamp the number to the 32-bit signed integer range
    return Math.max(INT_MIN, Math.min(num, INT_MAX));
}

*/


const myAtoi = function(s) {
    const INT_MIN = -(2 ** 31);
    const INT_MAX = 2 ** 31 - 1;

    // Parse the integer from the string
    const ans = Number.parseInt(s);

    // Check if the parsed result is NaN and return 0 if so
    if (isNaN(ans)) return 0;

    // Clamp the result within the 32-bit integer range
    return Math.max(INT_MIN, Math.min(ans, INT_MAX));
};
