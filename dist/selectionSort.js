"use strict";
const swap = (arr, firsIDX, secIDX) => {
    [arr[firsIDX], arr[secIDX]] = [arr[secIDX], arr[firsIDX]];
};
const indexOfMinimum = (array, startIndex) => {
    let minValue = array[startIndex];
    let minIndex = startIndex;
    for (let i = minIndex + 1; i < array.length; i++) {
        if (array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    }
    return minIndex;
};
const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let foundIndex = indexOfMinimum(array, i);
        swap(array, i, foundIndex);
    }
    return array;
};
const array = [22, 11, 99, 88, 9, 7, 42];
const array2 = [10, -1, 0, 3, 5, 7, 8, 8, 1, 9];
console.log("Array after sorting:  " + selectionSort(array)); //[7, 9, 11, 22, 42, 88, 99]
console.log("Array2 after sorting:  " + selectionSort(array2)); //[ -1,0,1,3,5,7,8,8,9,10]
