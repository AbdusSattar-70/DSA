const binarySearch = (arr, target) => {
  let min = 0;
  let max = arr.length - 1;
  if (min > max) return -1;
  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 10, 12], 6));