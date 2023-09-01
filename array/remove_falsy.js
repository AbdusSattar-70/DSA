const removeFalsy =  (arr) => {
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i]){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(removeFalsy([1,2,3,'',0,false]))