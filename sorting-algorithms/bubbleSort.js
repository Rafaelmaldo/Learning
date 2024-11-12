console.log('running code');

function myBubbleSort(nums) {
  let finishedSort = false;
  while (!finishedSort) {
    let hasSwapped = false;
    for (let i = 0; i < nums.length; i++) {
      if (i === 0) {
        hasSwapped = false;
      }
      
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
  return nums;
}

function bubbleSort(nums) {
  let swapped = false;
  do {
    swapped = false;
    for (let i = 0; i < nums.length; i++) {
      // snapshot(nums);
      if (nums[i] > nums[i + 1]) {
        const temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  // snapshot(nums);
}

console.log('return value :>> ', bubbleSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]));
