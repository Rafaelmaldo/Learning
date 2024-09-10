// Description: recursive sorting algorithm that sorts an array by splitting up all the values into arrays of one or 0
// and combines them back in the correct order mergeSort([1,2]) => will check if array length is one and if not
// if it returns horizantally more than one value then I will get a call-stack error different from an infinite loop
const mergeSort = (nums) => {
  const merge = (sortedArray, mergingArray ) => {
    mergingArray.forEach(element => {
      const numberForCompare = element;
        let i;
        for (i = sortedArray.length - 1; numberForCompare < sortedArray[i] && i >= 0; i--) {
            sortedArray[i + 1] = sortedArray[i];
        }
        sortedArray[i + 1] = numberForCompare;
    })
    return sortedArray;
  }
  
  if (nums.length === 1) {
    return nums;
  }

  const firstHalf = nums.slice(0, Math.floor(nums.length / 2));
  const secondHalf = nums.slice(Math.floor(nums.length / 2));
  return merge(mergeSort(firstHalf), mergeSort(secondHalf))
}

const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];

console.log(mergeSort(nums))