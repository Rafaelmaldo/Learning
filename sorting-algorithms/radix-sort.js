const getDigit = (number, place, _longestNumber) => {

  // check if the number has enough digits to be sorted
  // for example number = 1, place = 4 would break otherwise
  if ((number.toString().length <= place)) {
    return 0;
  }

  // make number an array and pop off the last element
  // then get the number at the current place 
  // for example (number = 3451, place = 2) -> 4
  const numberAsArray = (number.toString()).split("");
  const digit = Number(numberAsArray[(numberAsArray.length - 1) - place]);
  return digit;
}

const getLongestNumber = (array) => {
  let highestDigits = 1;
  
  // loop through the array and keep track of the amount of digits and update if higher
  for (num of array) {
    let digits = num.toString().length;
    if (digits > highestDigits) {
      highestDigits = digits;
    }
  }

  // return the digits of the highest value
  // for example [2345] -> 4
  return highestDigits;
}

const radixSort = (array) => {
  // Find number with the most digits
  const longestNumber = getLongestNumber(array);

  // Loop once for each digit
  for (let i = 0; i < longestNumber; i++) {

    // Create buckets to queue the numbers into
    const buckets = []
    for (let j = 0; j <= 9; j++){
      buckets.push([]);
    }

    // while there are still elements in the array
    while (array.length) {

      // remove the first element and get the digit we are on (i) and add to corresponding bucket
      let addToBucket = array.shift();
      let bucketNumber = getDigit(addToBucket, i);
      buckets[bucketNumber].push(addToBucket);
    }

    // remove the elements from the buckets and add them to the front of the array
    for (let bucket of buckets) {
      array = [...array, ...bucket]
    }
  }

  // return sorted array
  return array;
}

// testing with array of 99 random elements
const fill = 99;
const nums = new Array(fill)
  .fill()
  .map(() => Math.floor(Math.random() * 500000));

const ans = radixSort(nums);
console.log('My Radix Sort -> ', ans) // -> [properly sorted array]
console.log('Built in Sort function -> ', nums.sort()) // -> []