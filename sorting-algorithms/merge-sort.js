// Description: recursive sorting algorithm that sorts an array by splitting up all the values into arrays of one or 0
// and combines them back in the correct order mergeSort([1,2]) => will check if array length is one and if not
// if it returns horizantally more than one value then I will get a call-stack error different from an infinite loop
// time complexity: O(n log n)
// space complexity: O(n) -> becomes large spacially because of all the nested values
// my way doesn't have the blindly concatenate last value
const myMergeSort = (nums) => {
  const merge = (sortedArray, mergingArray) => {
    for(num of mergingArray){
      let j;
      for (j = sortedArray.length - 1; num < sortedArray[j] && j >= 0; j--) {
          sortedArray[j + 1] = sortedArray[j];
      }
      sortedArray[j + 1] = num;
    }
    return sortedArray;
  }
  
  if (nums.length === 1) {
    return nums;
  }

  return merge(mergeSort(nums.slice(0, Math.floor(nums.length / 2))), mergeSort(nums.slice(Math.floor(nums.length / 2))))
}

const mergeSort = (nums) => {
  // base case
  if (nums.length < 2) {
    return nums;
  }

  // you can be more clever about this code but I wanted it
  // to be readable to you
  // * much better because easier to debug and read
  const length = nums.length;
  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // merge takes two sorted lists and returns one sorted list
  return merge(sortedRight, sortedLeft);
};

const merge = (left, right) => {
  const results = [];

  // go until one list runs outs
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      // shift removes the first element in an array and returns it
      // it's like .pop() for the front
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  // either left or right will be empty so you can safely concat both
  return results.concat(left, right);
};

const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];

console.log(mergeSort(nums))