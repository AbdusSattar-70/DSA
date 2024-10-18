"use strict";
class SortableArrayImpl {
    constructor() {
        this.insert = (array, lastSortedIndex, insertableVal, order) => {
            let pos = lastSortedIndex;
            while (pos >= 0 &&
                (order === "asc"
                    ? array[pos] > insertableVal
                    : array[pos] < insertableVal)) {
                array[pos + 1] = array[pos];
                pos--;
            }
            array[pos + 1] = insertableVal;
        };
    }
    sortInsertion(array, order = "asc") {
        for (let i = 1; i < array.length; i++) {
            let lastSortedIndex = i - 1;
            let insertableVal = array[i];
            this.insert(array, lastSortedIndex, insertableVal, order);
        }
        return array;
    }
}
const a = [3, 5, -4, 7, 2, 11, 9, 13];
const b = ["banana", "apple", "grape", "orange", "kiwi"];
const sortArr = new SortableArrayImpl();
sortArr.sortInsertion(a, "desc");
console.log("Descending order (numbers):", a); // Output: [13, 11, 9, 7, 5, 3, 2, -4]
sortArr.sortInsertion(b);
console.log("Ascending order (strings):", b); // Output: ["apple", "banana", "grape", "kiwi", "orange"]
