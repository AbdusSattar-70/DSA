"use strict";
/* You are given a 0-indexed 1-dimensional (1D) integer array original,
* and two integers, m and n. You are tasked with creating a 2-dimensional (2D)
 array with  m rows and n columns using all the elements from original.

* The elements from indices 0 to n - 1 (inclusive) of original should form
the first row of the constructed 2D array, the elements
from indices n to 2 * n - 1 (inclusive) should form the second row of the
constructed 2D array, and so on.

* Return an m x n 2D array constructed according to the above procedure,
* or an empty 2D array if it is impossible.
*/
const construct2Darrary = (original, m, n) => {
    const converted = [];
    // check the 2D array construction is possible or not
    if (original.length !== m * n)
        return converted;
    // loop through the original array m times to construct a 2D array
    for (let i = 0; i < m; i++) {
        const row = original.slice(i * n, (i + 1) * n);
        converted.push(row);
    }
    return converted;
};
console.log(construct2Darrary([1, 2, 3, 4], 2, 2)); // [[1,2],[3,4]]
console.log(construct2Darrary([1, 2, 3, 4], 2, 3)); // []
console.log(construct2Darrary([1, 2, 3, 4, 5, 6, 7, 8], 4, 2)); // [[1,2],[3,4],[5,6],[7,8]]
console.log(construct2Darrary([1, 2, 3, 4, 5, 6, 7, 8], 2, 4)); // [[1,2,3,4],[5,6,7,8]]
