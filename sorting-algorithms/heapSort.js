// const heapify = (array, index, heapSize) => {
//   const leftIndex = (index * 2) + 1;
//   const rightIndex = (index * 2) + 2;

//   const leftValue = leftIndex <= heapSize ? array[leftIndex] : null;
//   const rightValue = rightIndex <= heapSize ? array[rightIndex] : null;

//   if(leftValue > array[index]) {
//     swapIndexes(index, leftIndex, array);
//   }

//   if(rightValue > array[index]) {
//     swapIndexes(index, Index, array);
//   }

// };

// const createMaxHeap = (array) => {
//   for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
//     heapify(array, i, array.length - 1);
//   }
// };

// const swapIndexes = (index1, index2, array) => {
//   const temp =  array[index1];
//   array[index1] = array[index2];
//   array[index2] = temp;
// };


const heapSort = (array) => {
  array = createMaxHeap(array);
  for (let i = array.length - 1; i > 0; i--) {
    swapPlace(0, i, array);
    heapify(array, 0, i);
  }
  return array;
};

const swapPlace = (index1, index2, array) => {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
};

const createMaxHeap = (array) => {
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    heapify(array, i, array.length);
  }
  return array;
};

const heapify = (array, index, heapSize) => {
  const left = 2 * index + 1;
  const right = 2 * index + 2;

  let largestValueIndex = index;

  if (heapSize > left && array[largestValueIndex] < array[left]) {
    largestValueIndex = left;
  }

  if (heapSize > right && array[largestValueIndex] < array[right]) {
    largestValueIndex = right;
  }

  if (largestValueIndex !== index) {
    swapPlace(index, largestValueIndex, array);
    heapify(array, largestValueIndex, heapSize);
  }
};

const nums = [2, 5, 3, 8, 10, 6, 4, 7, 9, 1];

console.log('max heap :>> ', nums)
createMaxHeap(nums)
console.log('max heap :>> ', nums)
