// const vowels = str => {
//   let counter = 0;
//   const vowel = ['a', 'e', 'i', 'o', 'u'];

//   for (let char of str.toLowerCase()) {
//     if (vowel.includes(char)) {
//       counter++;
//     }
//   }
//   return counter;
// };

// const result = vowels('hello there');
// console.log(result);

const vowels = str => {
  let counter = {};
  const vowel = ['a', 'e', 'i', 'o', 'u'];

  for (let char of str.toLowerCase()) {
    if (vowel.includes(char)) {
      counter[char] = counter[char] + 1 || 1;
    }
  }
  return counter;
};

const result = vowels('hello there');
console.log(result);