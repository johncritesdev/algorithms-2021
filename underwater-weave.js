class Queue {
  constructor() {
    this.data = [];
  };

  add(rec) {
    this.data.unshift(rec);
  };

  remove() {
    return this.data.pop();
  };

  peek() {
    return this.data[this.data.length - 1];
  };
};

const weave = (srcOne, srcTwo) => {
  const q = new Queue();

  while (srcOne.peek() || srcTwo.peek()) {
    if (srcOne.peek()) {
      q.add(srcOne.remove());
    }

    if (srcTwo.peek()) {
      q.add(srcTwo.remove());
    }
  }
  return q;
};

//test
const q1 = new Queue();
q1.add(1);
q1.add(3);
q1.add(5);
console.log(q1);

const q2 = new Queue();
q2.add(2);
q2.add(4);
q2.add(6);
console.log(q2);

const result = weave(q1, q2);
console.log(result);