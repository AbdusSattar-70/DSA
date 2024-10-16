type InsertType = (a: number[], b: number, c: number) => number;
type Insertion = (a: number[]) => void;
const insert: InsertType = (arr, rightIndex, val) => {
  let current = rightIndex;
  while (current >= 0 && arr[current] > val) {
    arr[current + 1] = arr[current];
    current--;
  }
  return (arr[current + 1] = val);
};

const insertionSort: Insertion = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    insert(arr, i - 1, arr[i]);
  }
};

const arr = [3, 5, -4, 7, 2, 11, 9, 13];
insertionSort(arr);
console.log(arr);
