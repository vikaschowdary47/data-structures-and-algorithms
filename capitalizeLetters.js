const capitalizeFirstLetters = (str) => {
  //   const strArr = str.toLowerCase().split(" ");
  //   for (let i = 0; i < strArr.length; i++) {
  //     strArr[i] =
  //       strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  //   }
  //   return strArr.join(" ");

  // diff method

  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
};

const output = capitalizeFirstLetters("my naME vikas");
console.log(output);
