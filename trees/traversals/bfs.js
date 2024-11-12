const breadthFirstTraverse = (queue, array) => {
  const newQ = [];

  queue.forEach(node => {
    array.push(node.value);

    if(node.left) newQ.push(node.left);
    if(node.right) newQ.push(node.right);

    queue.unshift();
  });

  if(newQ.length) { 
    return breadthFirstTraverse(newQ, array);
  } else {
    return array;
  }
};

// unit tests
// do not modify the below code
const answer = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];

const tree = {
  value: "A",
  left: {
    value: "B",
    left: {
      value: "D",
      left: {
        value: "G",
        left: null,
        right: null
      },
      right: null
    },
    right: {
      value: "E",
      left: null,
      right: {
        value: "H",
        left: {
          value: "K",
          left: null,
          right: null
        }
      }
    }
  },
  right: {
    value: "C",
    left: {
      value: "F",
      left: {
        value: "I",
        left: null,
        right: null
      },
      right: {
        value: "J",
        left: null,
        right: null
      }
    },
    right: null
  }
};

console.log(breadthFirstTraverse([tree], []))
