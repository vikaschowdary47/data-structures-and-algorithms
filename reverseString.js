const reverseString = (str) => {
  //   return str.split("").reverse().join("");

  // diffrent method

  //   let rString = "";
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     rString += str[i];
  //   }
  //   return rString;

  // different method

  //   let rString = "";
  //   for (let i = 0; i <= str.length - 1; i++) {
  //     rString = str[i] + rString;
  //   }
  //   return rString;

  // different method

  //   let rString = "";
  //   for (let char of str) {
  //     rString = char + rString;
  //   }
  //   return rString;

  // different method

  //   let rString = "";
  //   str.split("").forEach((char) => (rstring = char + rString));
  //   return rString;

  // different method

  return str.split("").reduce((rString, char) => char + rString, "");
};

const output = reverseString("iknowu");

console.log(output);
