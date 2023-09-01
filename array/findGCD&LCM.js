// use this method to find any group of numbers gcd
const gcd = (a,b) =>{
  // this will run untill remainder or b is 0;
  while (b !== 0) {
    let remainder = a % b;
    // change the a and b value (euclidean algorithm gcd)
    a = b;
    b = remainder;
  }
  return a;
}

const findGCD = (arr) =>{
  let gcdResult = arr[0];
  for(let i = 1; i < arr.length; i++){
    gcdResult = gcd(gcdResult, arr[i]);
  }
  return gcdResult;
}

const findLCM = (arr) =>{
  const lcm = (a,b) => (a * b) / gcd(a,b);
  let lcmResult = arr[0];
  for(let i = 1; i < arr.length; i++){
    lcmResult = lcm(lcmResult, arr[i]);
  }
  return lcmResult;
}

console.log(findGCD([1,2,3,4,5]))
console.log(findLCM([1,2,3,4,5]))