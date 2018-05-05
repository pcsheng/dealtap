const arr = [1, 22, 44, 55, 66];
for (var i = 0; i < arr.length; i += 1) {
  setTimeout(() => {
    console.log(`Index: ${i}, value: ${arr[i]}`)
  }, 3000);
}

/*
  the problem with having the setTimeout function in the loop is that
  the setTimeout function takes the console logs and places them into a queue
  to be placed onto the stack at a later time -- in this case, after 3 seconds
  
  the values of i in the console log are not set until the console log
  is moved from the queue to the stack

  at this point, the value of i becomes 5 because that is the termination
  condition for the loop, so all 5 console logs placed in the queue all get
  evaluated with i = 5 when the value is assigned on the stack

  indexes are 5 and values are undefined as arr[5] does not exist
*/

/*
  similar to q1, we can use currying to immediately set the value of i
  then calling setTimeout
*/

for (let i = 0 ; i < arr.length ; i ++) {
  ((i) => {
    setTimeout(() => {
      console.log(`Index: ${i}, value: ${arr[i]}`)
    }, 3000);
  })(i);
}