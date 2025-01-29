function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result1 = add(5, 3); // Correct usage
console.log(result1); // Output: 8

try {
  let result2 = add("hello", 5); // Incorrect usage; throws an error
  console.log(result2);
} catch (error) {
  console.error(error.message); // Output: Both arguments must be numbers
}

// Alternative solution using type guards:
function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (!isNumber(a) || !isNumber(b)) {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result3 = addSafe(5,3); //Correct
console.log(result3); //Output 8

try{
  let result4 = addSafe("hello", 5); //Incorrect usage; throws an error
  console.log(result4);
}catch(error){
  console.error(error.message); //Output: Both arguments must be numbers
} 