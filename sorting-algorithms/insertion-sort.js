function myInsertionSort(nums) {
  
  nums.forEach((element, index) => {
    let numberToInsert = element;
    let j = index - 1;
    while (nums[j] > numberToInsert && j >= 0) {
      nums[j + 1] = nums[j];
      j--
    } 
    nums[j + 1] = numberToInsert;
  });
}

/**
 * things I had trouble understanding
 *  a) that the array was just one array and not being inserted into a new array
 *  b) that I was shifting the values to the right of the element 
 *    ex. I was using splice in order to split the array at that index and adding the value in that way
 *    what I took away from this sorting algorithm is that you can have a conditional other than just looping the array in the for loop on line 4
 *    certainly not something that I had ever thought of doing before I would normally have a value and have an if statement inside the loop to end i
 *  c) I understand now why the guy said that this was similar to the way a human would normally sort
 *    because it takes the first number and puts it under the first number that is higher than it and then looks at another number and only it more efficient
 *    than bubble sort because bubble sort I think will keep still loop through the whole array
 *  
 * things to improve on: 
 *  get quicker with the debugger
 *  maybe I don't know what its expecting
 */

function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let numberToInsert = nums[i]; // the numberToInsert number we're looking to insert
    let j; // the inner counter

    // loop from the right to the left
    for (j = i - 1; nums[j] > numberToInsert && j >= 0; j--) {
      // move numbers to the right until we find where to insert
      nums[j + 1] = nums[j];
    }

    // do the insertion
    nums[j + 1] = numberToInsert;
  }
  return nums;
}


const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
myInsertionSort(nums);
console.log('new value of nums :>> ', nums)
