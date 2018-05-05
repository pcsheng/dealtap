const palindrome = (word) => {
  console.log(word === word.split("").reverse().join(""));
  return word === word.split("").reverse().join("");
}

palindrome("racecar");
palindrome("orange");