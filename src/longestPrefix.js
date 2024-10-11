// Helper function to find the common prefix of the array based on a character position
function isCommonPrefix(strs, index) {
    const char = strs[0][index]; // Get the character from the first string

    // Check if all strings have the same character at the given index
    for (let i = 1; i < strs.length; i++) {
        if (index >= strs[i].length || strs[i][index] !== char) {
            return false;
        }
    }
    return true;
}

function longestCommonPrefix(strs) {
    let prefix = strs[0];
    // Iterate through each character position of the first string
    for (let i = 0; i < prefix.length; i++) {
        if (!isCommonPrefix(strs, i)) {
            prefix = prefix.slice(0, i);
            return prefix;
        }
    }

    return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));  // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));     // Output: ""
