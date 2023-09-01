// only one type of bracket best solution without
// using stack
function balance (str) {
  let openBr = 0;
  for(const br of str){
    if (br === '['){
      openBr += 1;
    }
    else if(openBr !== 0 && br === ']') {
      openBr -= 1;
    }

    else return false;

  }

return openBr === 0;
}

console.log(balance('[[][]'))