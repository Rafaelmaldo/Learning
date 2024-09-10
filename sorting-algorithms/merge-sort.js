// Description: recursive sorting algorithm that sorts an array by splitting up all the values into arrays of one or 0
// and combines them back in the correct order mergeSort([1,2]) => will check if array length is one and if not
// if it returns horizantally more than one value then I will get a call-stack error different from an infinite loop
const mergeSort = (nums) => {
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

const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];

console.log(mergeSort(nums))