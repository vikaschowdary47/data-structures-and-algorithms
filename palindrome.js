const palindrome = (str) => {
  //   if (typeof str === "string") {
  //     const rString = str.split("").reverse().join("");
  //     if (rString === str) {
  //       return "is a palindrome";
  //     } else {
  //       return "not a plaindrome";
  //     }
  //   } else {
  //     return `${str} is not  a string`;
  //   }

  // diff method

  const rString = str.split("").reverse().join("");
  return rString === str;
};

const output = palindrome("racecar");

console.log(output);
