"use strict";
// it works for only sorted subarray portion by traversing right to left.
const insert = (array, lastSortedIdx, insertable_val) => {
    // Start from the boundary of the sorted subarray
    let currentPos = lastSortedIdx;
    // Shift elements in the sorted subarray to the right if they are larger than the current value
    while (currentPos >= 0 && array[currentPos] > insertable_val) {
        // Move the larger item one Position to the right to make space for correct item
        array[currentPos + 1] = array[currentPos];
        currentPos--; //move current pointer left to find correct position
    }
    // Place the insertable value in its correct Position within the sorted subarray
    return (array[currentPos + 1] = insertable_val);
};
/**
 * Performs insertion sort on the input array.
 * The algorithm assumes the first element is a sorted subarray of length 1.
 * It expands the sorted subarray by one element at a time, inserting each element in its correct position.
 * @param array - The array to be sorted in-place.
 */
const insertionSort = (array) => {
    // Start iterating from the second element, as the first element is already considered sorted
    for (let i = 1; i < array.length; i++) {
        // The index of the boundary of the sorted subarray
        let lastSortedIdx = i - 1;
        // The value from the unsorted portion to be inserted
        let insertable_val = array[i];
        // Insert the current value into the correct position within the sorted subarray
        insert(array, lastSortedIdx, insertable_val);
    }
};
// Test the insertionSort function with an example array
const arr = [3, 5, -4, 7, 2, 11, 9, 13];
insertionSort(arr);
console.log(arr); // Output  [-4, 2, 3, 5, 7, 9, 11, 13]
