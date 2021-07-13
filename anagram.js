const anagram = (strA, strB) => {
  const aCharMap = buildCharMap(strA);
  const bCharMap = buildCharMap(strB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }
  return true;
};

const buildCharMap = str => {
  const charmap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charmap[char] = charmap[char] + 1 || 1;
  }
  return charmap;
}



//test
const result = anagram('bob', 'obb');
const result2 = anagram('jelly', 'jerry');
console.log(result);
console.log(result2);
const mapTest = buildCharMap('fjhksddfhsjk!!hf');
console.log(mapTest);