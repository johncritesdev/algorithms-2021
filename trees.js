class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children.filter(node => {
      return node.data !== data;
    });
  }
}

class Trees {
  constructor() {
    this.root = null;
  }
}
//node test
// const n = new Node('a');
// n.add('b')
// console.log(n)

//tree test
const node = new Node(10);
const tree = new Trees();
tree.root = node;
console.log(tree);
