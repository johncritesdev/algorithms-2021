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

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  };

  add(rec) {
    this.first.push(rec);
  };

  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.pop();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return record;
  }

  peek() {
    return this.second.peek();
  }
};

const s = new Stack();
s.push(1)
s.push(2)
s.push(3)
// s.pop()
console.log(s)

const q = new Queue();
q.add(1);
q.add(2);
q.add(3);
// q.remove()
console.log(q);