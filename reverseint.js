const reverseInt = n => {
  const reversed = n.toString()
    .split('')
    .reverse()
    .join('');

  return parseInt(reversed) * Math.sign(n);
};

//test
const result = reverseInt(-56);
const result2 = reverseInt(32);
console.log(result);
console.log(result2);