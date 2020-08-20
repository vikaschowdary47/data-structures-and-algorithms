const reverseInt = (int) => {
  const rInt = int.toString().split("").reverse().join("");
  //   console.log(parseInt(rInt));
  return parseInt(rInt) * Math.sign(int);
};
const output = reverseInt(-123456789);

console.log(output);
