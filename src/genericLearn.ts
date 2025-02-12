const developer = <T, X>(p: T, q: X): [T, X] => {
  return [p, q];
};

console.log(developer<number, string>(120, "120"));
