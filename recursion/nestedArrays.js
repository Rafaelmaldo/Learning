
// * Rules
//  - No using flatten or reduce


function myNestedAdd(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    if (Array.isArray(currentValue) ) {
      sum += nestedAdd(currentValue);
    } else {
      sum += currentValue;
    }
  }

  return sum;
}

function nestedAdd(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    if (Array.isArray(current)) {
      sum += nestedAdd(current);
    } else {
      sum += current;
    }
  }
  return sum;
}

console.log(myNestedAdd([1,2,3,[4,5,6,7,8]]))
