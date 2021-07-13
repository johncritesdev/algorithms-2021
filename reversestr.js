const revStr = str => {
  const reversed = str
    .split('')
    .reverse()
    .join('');

  return reversed;
};

//test
const result = revStr('love');
console.log(result);