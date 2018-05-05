function curry(multiplier) {
  return (number) => {
    return multiply(number, multiplier);
  }
}


function multiply(number, multiplier = 1) {

  if (number === undefined) {
    return multiplier;
  }

  return curry(number * multiplier);

}

console.log(multiply(2)(2)(2)(2)(2)(2)(2)());