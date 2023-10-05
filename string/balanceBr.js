// only one type of bracket best solution without
// using stack
function balance(str) {
  let openBr = 0;
  for (let i = 0; i < str.length; i += 1) {
    const br = str[i];
    if (br === '[') {
      openBr += 1;
    } else if (openBr !== 0 && br === ']') {
      openBr -= 1;
    } else return false;
  }
  return openBr === 0;
}

console.log(balance('[[][]'));