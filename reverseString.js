const reverseString = (str) => {
  const arr = str.split("");
  arr.reverse();
  const rString = arr.join("");
  return console.log(rString);
};

reverseString("iknowu");
