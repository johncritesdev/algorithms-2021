class Stack {
  constructor() {
    this.data = [];
  };

  push(rec) {
    this.data.push(rec);
  };

  pop() {
    return this.data.pop();
  };

  peek() {
    return this.data[this.data.length - 1];
  };
};

const result = new Stack();
result.push(1);
result.push(2);
result.push(3);
result.pop();
console.log(result);