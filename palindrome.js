const palindrome = str => {
  const reversed = str
    .split('')
    .reverse()
    .join('');

  return reversed === str;
};

//test
const result = palindrome('racecar');
const result2 = palindrome('tarzan');
console.log(result);
console.log(result2);