const longestWord = (str) => {
  // remove puncuation
  const wordArr = str.toLowerCase().match(/[a-z0-g]+/g);

  const sorted = wordArr.sort((a, b) => {
    return b.length - a.length;
  });

  const longestWordArr = sorted.filter((word) => {
    return word.length === sorted[0].length;
  });
  if (longestWordArr.length === 1) {
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
};

const output = longestWord("hello,there my name is vikas");
console.log(output);
