class Queue {
  constructor() {
    this.data = [];
  };

  add(rec) {
    this.data.unshift(rec);
  };

  remove() {
    this.data.pop();
  }
}

//test
const q = new Queue();
q.add();
q.add();
q.add();

console.log(q);