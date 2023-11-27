// Is n divisible by (...)

function isDivisible(...numbers){
  let firstNumber = numbers[0];
  for(let i = 1; i < numbers.length; i++) {
    if(firstNumber % numbers[i] !== 0) return false;
  }
  return true;
}
  