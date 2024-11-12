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
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
    this.height = 1;
  }  
  add(value) {
    const node = new Node(value);
    if(this.right === null && this.left === null) {
      if(value > this.value) {
        this.right = node;
        this.right.height = this.height;
        this.height = this.height + 1;
      } else {
        this.left = node;
        this.left.height = this.height;
        this.height = this.height + 1;
      }
    } else if(this.right === null && value > this.value) {
      this.right = node;
      this.right.height = this.height;
      this.height = this.height + 1;
    } else if(this.left === null && value < this.value) {
      this.left = node;
      this.left.height = this.height;
      this.height = this.height + 1;
    } else if(value < this.value ) {
      this.left.add(value);
    } else if(value > this.value) {
      this.right.add(value);
    }

    // const direction = this._isUnbalanced();

    // if(direction) {
    //   const newNode = this._rotate(this, direction);
    //   this.value = newNode.value;
    //   this.right = newNode.right;
    //   this.left = newNode.left;
    //   this.height = newNode.height;
    // }
    
    if(this.right?.height && this.left?.height) {

    } else if(this.left?.height) {
      this.height = this.left.height + 1;
    } else if(this.right?.height) {
      this.height = this.right.height + 1;
    }
  }
  _isUnbalanced() {
    const matchesLeftUnbalanced = this?.left?.left && !this.right && !(this.left?.right && this?.left?.left?.right && !this.left?.left?.left?.left);

    if(matchesLeftUnbalanced) {
      return 'right';
    }

    const matchesRightUnbalanced = this?.right?.right && !this.left && !(this.right?.left && this?.right?.right?.left && !this.right?.right?.right?.right);

    if(matchesRightUnbalanced) {
      return 'left';
    }

//  3 (1)
//    7 (2)
//  4 (3)


    return null;
  }
  _rotate(subtree, direction) {
    if(direction === 'right') {
      let bottomNode = new Node(subtree.left.left.value);
      let middleNode = new Node(subtree.left.value);
      let topNode = new Node(subtree.value);

      let rotatedNode = middleNode;
      rotatedNode.height = subtree.height;

      rotatedNode.left = bottomNode;
      rotatedNode.left.height = subtree.height; 

      rotatedNode.right = topNode;
      rotatedNode.right.height = subtree.height;

      console.log(rotatedNode)
      return rotatedNode;
    }

    if(direction === 'left') {
      let bottomNode = new Node(subtree.right.right.value);
      let middleNode = new Node(subtree.right.value);
      let topNode = new Node(subtree.value);

      let rotatedNode = middleNode;
      rotatedNode.height = subtree.height;

      rotatedNode.left = topNode;
      rotatedNode.left.height = subtree.height;
 

      rotatedNode.right = bottomNode; 
      rotatedNode.right.height = subtree.height;

      return rotatedNode;
    }
  }
  serialize() {
    const ans = { value: this.value };
    ans.left = this.left === null ? null : this.left.serialize();
    ans.right = this.right === null ? null : this.right.serialize();
    ans.height = this.height;
    return ans;
  }
}

const nums = [3, 7, 4, 6, 5, 1, 10, 2, 9, 8];
// const nums = [10, 9, 8, 7];
// const nums = [0,1,2,3,4];
const tree = new Tree();
nums.map((num) => tree.add(num));
const objs = tree.toObject();
console.log(objs, nums);