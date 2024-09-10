  // Base case
  // Array.length < 2 (what he normally uses)
  // lets start out by returning an array with the elements split how they should be

  // Pivot last element
  // ArrayOfLargerElements 
  // ArrayOfSmallerElements 
  // and then run quickSort() on both of those arrays
  // ! Do not add the pivot which is the last element
  // ? handling equal add to less than pile

const quickSort = (nums) => {
  if (nums.length < 2) {
    return nums;
  }

  const pivotValue = [nums.pop()];
  const largerValues = nums.filter(num => num <= pivotValue[0]);
  const smallerValues =  nums.filter(num => num > pivotValue[0]);

  const smallerValuesSorted = quickSort(smallerValues)
  const largerValuesSorted = quickSort(largerValues)
  const allValues = largerValuesSorted.concat(pivotValue, smallerValuesSorted)

  return allValues;
}

const nums = [10, 4, 7, 84, 6, 3, 9, 4, 7, 5];
console.log('myQuickSort: ', quickSort(nums));
