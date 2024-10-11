function generate(m, n) {
  const combination = [];
  const currentComb = [];
  let i = 0;
  while (i >= 0) {
    if (currentComb.length === m) {
      combination.push([...currentComb]);
      i = currentComb.pop() + 1;
    } else if (i === n) {
      i = currentComb.pop() + 1;
    } else {
      currentComb.push(i);
      i += 1;
    }
  }
  return combination;
}

generate(3, 5);