//recursive
const memoize = fn => {
  const cache = {};

  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  }
};

const basefib = n => {
  if (n < 2) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
};

//test
const fib = memoize(basefib);
console.log(fib(7));

//iterative
const newFib = n => {
  const series = [0, 1];

  for (let i = 2; i <= n; i++) {
    const a = series[i - 1];
    const b = series[i - 2];

    series.push(a + b);
  }
  return series[n];
};

//test
const result2 = newFib(7);
console.log(result2);