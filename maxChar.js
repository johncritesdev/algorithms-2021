const maxChar = str => {
  const charmap = {};
  let maxAmount = 0;
  let maxchar = '';

  for (let char of str) {
    if (charmap[char]) {
      charmap[char]++;
    } else {
      charmap[char] = 1;
    }
  }

  for (let char in charmap) {
    if (charmap[char] > maxAmount) {
      maxAmount = charmap[char];
      maxchar = char;
    }
  }
  return maxchar;
};

//test
const result = maxChar('aaassd');
const result2 = maxChar('dfhjkjkjjj');
console.log(result);
console.log(result2);