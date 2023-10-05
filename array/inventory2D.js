// Compare and update the inventory stored in a 2D array against a second 2D
// array of a fresh delivery. Update the current existing inventory item
// quantities (in arr1). If an item cannot be found, add the new item and
// quantity into the inventory array. The returned inventory array should
// be in alphabetical order by item.

const updateInventory = (arr1, arr2) => {
  const updateInv = structuredClone(arr1);
  for (const item2 of arr2) {
    const foundItem = updateInv.find((item1) => item1[1] === item2[1]);
    if (foundItem) {
      foundItem[0] += item2[0];
    } else updateInv.push(item2);
  }
  updateInv.sort((a, b) => a[1].localeCompare(b[1]));
  return updateInv;
};

const curInv = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone'],
];

const newInv = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste'],
];

console.log(updateInventory(curInv, newInv));
