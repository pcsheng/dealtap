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

  // can't think of how to check for the end of the function calls, this console log prints every call that gets made
  // console.log(number * multiplier);
  return curry(number * multiplier);

}


multiply(4)(3)(4)(2)();
multiply(2)(2)(2)(2)(2)(2)(2)();

multiply(4)(3)(4)(2);
