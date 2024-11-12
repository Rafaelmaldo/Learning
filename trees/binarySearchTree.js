class Tree {
  constructor() {
    this.root = null;
  }
  add(value) {
    if (this.root) {
      this.root.add(value);
    } else {
      const node = new Node(value);
      this.root = node;
    }
  }
  toObject() {
    return this.root;
  }
}

class Node {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  add(value) {
    console.table([[value, 'new value'],[this.value, 'node value'], [this.left?.value, 'left value'],[this.right?.value, 'right value']])
    const node = new Node(value);

    if(this.right === null && this.left === null) {
      if(value > this.value) {
        this.right = node;
      } else {
        this.left = node; 
      }
    }

    if(value < this.left?.value ) {
      this.left.add(value);
    } 

    if(value > this.right?.value) {
      this.right.add(value);
    }
  }
}

const nums = [3, 5, 7, 8, 10, 12, 15];
const tree = new Tree();
nums.map((num) => tree.add(num));
const objs = tree.toObject();
console.log(objs, nums);