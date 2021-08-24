const fibonacci = position => {
  let result = [0, 1];

  if (position < 2) return position;
  
  while(result.length <= position){
      const tmpValue = result.slice(-2).reduce((prv, curr) => prv + curr);
      result.push(tmpValue);
  }

  return result[position];
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));