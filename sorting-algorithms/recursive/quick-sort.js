  // Base case
  // Array.length < 2 (what he normally uses)
  // lets start out by returning an array with the elements split how they should be

  // Pivot last element
  // ArrayOfLargerElements 
  // ArrayOfSmallerElements 
  // and then run quickSort() on both of those arrays
  // ! Do not add the pivot which is the last element
  // ? handling equal add to less than pile

const myQuickSort = (nums) => {
  if (nums.length < 2) {
    return nums;
  }

  const pivotValue = [nums.pop()];
  const largerValues = nums.filter(num => num <= pivotValue);
  const smallerValues =  nums.filter(num => num > pivotValue);;

  const smallerValuesSorted = quickSort(smallerValues)
  const largerValuesSorted = quickSort(largerValues)
  const allValues = largerValuesSorted.concat(pivotValue, smallerValuesSorted)

  return allValues;
}

console.log('myQuickSort: ', myQuickSort(nums));
