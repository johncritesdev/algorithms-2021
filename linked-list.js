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
}

const list = new LinkedList();
list.head = new Node(10);
console.log(list)