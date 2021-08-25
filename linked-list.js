//node class API
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
//linked list Class API
class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;

    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }
}

const node1 = new Node(5);
const list = new LinkedList();
list.head = node1;
list.insertFirst(15);
list

// const list = new LinkedList();
// list.head = new Node(10);
// console.log(list)