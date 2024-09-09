function myNestedAdd(array) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) ) {
      return nestedAdd(array.flat());
    }
  }

  // BASE CASE
  return array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  })
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

console.log(nestedAdd([1,2,3,[4,5,6,7,8]]))
