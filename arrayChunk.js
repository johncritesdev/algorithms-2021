const chunk = (arr, size) => {
  const subArr = [];

  for (let element of arr) {
    const last = subArr[subArr.length - 1];

    if (!last || last.length === size) {
      subArr.push([element]);
    } else {
      last.push(element);
    }
  }
  return subArr;
}

//test
const result = chunk([1, 2, 3, 4], 2);
const result2 = chunk([1, 2, 3, 4, 5, 6, 7], 3)
console.log(result);
console.log(result2);