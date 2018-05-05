function curry(multiplier) {
  return (number) => {
    return multiply(number, multiplier);
  }
}


function multiply(number, multiplier = 1) {

  if (number === undefined) {
    console.log(multiplier)
    return multiplier;
  }

  return curry(number * multiplier);

}


multiply(4)(3)(4)(2)();
multiply(2)(2)(2)(2)(2)(2)(2)();

multiply(4)(3)(4)(2);
