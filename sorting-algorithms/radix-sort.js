//  !havent figured out the third param use
const getDigit = (number, place, _longestNumber) => {
  if ((number.toString().length <= place)) {
    return 0;
  }

  const numberAsArray = (number.toString()).split("");
  const digit = Number(numberAsArray[(numberAsArray.length - 1) - place]);
  return digit;
}

// WORKS PRETTY GOOD
const getLongestNumber = (array) => {
  // return of this x number of values
  let highestDigits = 1;
  
  for (num of array) {
    let digits = num.toString().length;
    if (digits > highestDigits) {
      highestDigits = digits;
    }
  }

  return highestDigits;
}

const radixSort = (array) => {
  const longestNumber = getLongestNumber(array);
  for (let i = 0; i < longestNumber; i++) {
    const buckets = []
    for (let j = 0; j <= 9; j++){
      buckets.push([]);
    }

    while (array.length) {
      let addToBucket = array.shift();
      let bucketNumber = getDigit(addToBucket, i);
      buckets[bucketNumber].push(addToBucket);
    }

    for (let bucket of buckets) {
      array = [...array, ...bucket]
    }

  }
  return array;
}

const fill = 99;
const nums = new Array(fill)
  .fill()
  .map(() => Math.floor(Math.random() * 500000));
const ans = radixSort(nums);
console.log(ans) // -> [properly sorted array]
console.log(nums.sort()) // -> []