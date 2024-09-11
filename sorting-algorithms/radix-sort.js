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

// console.log(radixSort([3221, 1,10,9680, 577, 9420, 7, 5622, 4793, 2030, 3138, 82, 2599, 743, 4127]))
// console.log(radixSort([25,23,24,42, 34, 900,700,600,400, 1,2,3,4,5]))
// const nums = [
//      1059,
//      11561,
//      11839,
//      15364,
//      17620,
//      23326,
//      26497,
//      30493,
//      50667,
//      55055,
//      58534,
//      63135,
//      78909,
//      80854,
//      82618,
//      92598,
//      96766,
//      112606,
//      113249,
//      114018,
//      118130,
//      128590,
//      129278,
//      146264,
//      146954,
//      153465,
//      154500,
//      161633,
//      165331,
//      168687,
//      170049,
//      171005,
//      179207,
//      180832,
//      187455,
//      197728,
//      199176,
//      215391,
//      224816,
//      232629,
//      245092,
//      246793,
//      247067,
//      248080,
//      253710,
//      255363,
//      255442,
//      269237,
//      269384,
//      269562,
//      270182,
//      270862,
//      273643,
//      273784,
//      276358,
//      283598,
//      285945,
//      294094,
//      294935,
//      295644,
//      308378,
//      322745,
//      324058,
//      325589,
//      328443,
//      333880,
//      336615,
//      340419,
//      340878,
//      341570,
//      343451,
//      345091,
//      345595,
//      357833,
//      368602,
//      369869,
//      388729,
//      388746,
//      389096,
//      390376,
//      393580,
//      397027,
//      401877,
//      405964,
//      407005,
//      415412,
//      417511,
//      429223,
//      445629,
//      451821,
//      457177,
//      462175,
//      476839,
//      479929,
//      481520,
//      485174,
//      490749,
//      494440,
//      497082,
//    ]
// console.log(radixSort(nums))
const fill = 99;
const nums = new Array(fill)
  .fill()
  .map(() => Math.floor(Math.random() * 500000));
const ans = radixSort(nums);
console.log(ans) // -> [properly sorted array]
console.log(nums.sort()) // -> []