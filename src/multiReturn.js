// it is helpfull when a function returns multiples value

const sum = (a, b) => {
  const add = a + b;
  const substract = a - b;
  const multi = a * b;
  const divide = a / b;
  return [add, substract, multi, divide];
};

const [adding, sub, multi, divide] = sum(10, 5);
console.log(adding, sub, multi, divide);