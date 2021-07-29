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
    this.data[this.data.length - 1];
  };
}

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
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.peek();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return record;
  }
}

const q = new Queue();
q.add(1);
q.add(2);
q.peek(1);
q.remove(1);
q.remove();
console.log(q);

