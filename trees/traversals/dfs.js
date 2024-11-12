// Postorder traversal, as you have guessed, you recursively call the method on the left subtree,
// then the left subtree, then you process the node. The results of these are as follows:

const preorderTraverse = (node, array) => {
  array.push(node.value);

  if(node.left) {
    preorderTraverse(node.left, array);
  }

  if(node.right) {
    preorderTraverse(node.right, array);
  }

  return array;
};

const inorderTraverse = (node, array) => {
  if(node.left) {
    inorderTraverse(node.left, array);
  }
  
  array.push(node.value)

  if(node.right) {
    inorderTraverse(node.right, array);
  }

  return array;
};

const postorderTraverse = (node, array) => {
  if(node.right) {
    postorderTraverse(node.right, array);
  }

  array.push(node.value);

  if(node.left) {
    postorderTraverse(node.left, array);
  }

  return array;
};

const tree = {
  value: 8,
  left: {
    value: 4,
    left: {
      value: 3,
      left: {
        value: 2,
        left: null,
        right: null
      },
      right: null
    },
    right: {
      value: 5,
      left: null,
      right: {
        value: 7,
        left: {
          value: 6,
          left: null,
          right: null
        }
      }
    }
  },
  right: {
    value: 12,
    left: {
      value: 10,
      left: {
        value: 9,
        left: null,
        right: null
      },
      right: {
        value: 11,
        left: null,
        right: null
      }
    }
  }
};

// console.log('preorder traverse :>> ', preorderTraverse(tree, []))
// console.log('inorder traverse :>> ', inorderTraverse(tree, []))
console.log('postorder traverse :>> ', postorderTraverse(tree, []))