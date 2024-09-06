console.log('running code');

function bubbleSort(nums) {
  console.log(nums)
  // code goes here
  let finishedSort = false;
  while (!finishedSort) {
    let hasSwapped = false;
    for (let i = 0; i < nums.length; i++) {
      if (i === 0) {
        hasSwapped = false;
      }
      
      // ! the issue is here 
      if (i === nums.length - 1 && !hasSwapped) {
        finishedSort = true;
        break;
      }

      const current = nums[i];
      const next = nums[i+1];

      if (next < current) {
        hasSwapped = true;
        nums[i] = next;
        nums[i+1] = current;
      }
    }
  }
  console.log('nums :>> ', nums);
  return nums;
}

console.log('return value :>> ', bubbleSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]));
