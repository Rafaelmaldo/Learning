// Description: recursive sorting algorithm that sorts an array by splitting up all the values into arrays of one or 0
// and combines them back in the correct order mergeSort([1,2]) => will check if array length is one and if not
// if it returns horizantally more than one value then I will get a call-stack error different from an infinite loop

// true number check
// if (isNaN(nums[i])) {
//   continue;
// }

// 

const mergeSort = (nums) => {
  const splitNums = (splitValue) => {
    // BASE CASE
    if (splitValue.length <= 2) {
      return [[splitValue[0]], [splitValue[1]]];
    }
/** original array
 *    /  \
 *   /\  /\
 *  /\/\
 */


    if((splitValue.length / 2)%2 === 1) {
      const firstHalf = splitValue.slice(0, Math.floor((splitValue.length - 2) / 2));
      const secondHalf = splitValue.slice(Math.floor((splitValue.length - 2) / 2));
      const remainderElements = splitValue.slice(Math.floor(splitValue.length - 2)); 
      return [
        splitNums(firstHalf),
        splitNums(secondHalf),
        splitNums(remainderElements)
      ];  
    }

    const firstHalf = splitValue.slice(0, Math.floor((splitValue.length) / 2));
    const secondHalf = splitValue.slice(Math.floor((splitValue.length) / 2));
    return [
      splitNums(firstHalf),
      splitNums(secondHalf),
    ];
  };

  const mergeGreaterArrays = (
    toSortedGreaterArray,
    unsortedGreaterArray
  ) => {
    unsortedGreaterArray.forEach((element) => {
      const numberToInsert = element;
      let i;

      for (
        i = toSortedGreaterArray.length - 1;
        toSortedGreaterArray[i] > numberToInsert && i >= 0;
        i--
      ) {
        toSortedGreaterArray[i + 1] = toSortedGreaterArray[i];
      }

      toSortedGreaterArray[i + 1] = numberToInsert;
    });

    return toSortedGreaterArray;
  };

  const mergeNums = (mergeValues) => {
    if (Array.isArray(mergeValues[0][0]) && Array.isArray(mergeValues[1][0])) {
      return mergeNums([mergeNums(mergeValues[0]), mergeNums(mergeValues[1])]);
    } else if (mergeValues.length < 1) {
      return mergeValues
    } else {
      let sortedArray = mergeValues[0];
      const mergingArray = mergeValues[1];
      
      if (mergingArray.length === 1 && sortedArray.length === 1) {
        return (mergingArray[0] > sortedArray[0]
          ? [sortedArray[0], mergingArray[0]]
          : [mergingArray[0], sortedArray[0]])
      }

      return mergeGreaterArrays(sortedArray, mergingArray);
    }
  };

  return mergeNums(splitNums(nums))
}

const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
// console.log(nums);
console.log(mergeSort(nums));
