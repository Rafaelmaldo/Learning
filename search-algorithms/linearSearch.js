// for both exercises, the id of the object you're searching for is given to you
// as integer. return the whole object that you're looking for
//
// it's up to you what to return if the object isn't found (we're not testing that)

function linearSearch(id, array) {
  // * pretty useful lesson here regarding the difference between for and for each 
  // * (function scoping)
  // array.forEach(element => {
  //   if (element.id === id) {
  //     return element;
  //   }
  // });
  for (element of array) {
    if (element.id === id) {
      return element;
    }
  };
  return null;
}

function binarySearch(id, array) {
  let searchable = array
  
  while (searchable.length) {
    const length = searchable.length;
    const middle = Math.floor(length / 2);
  
    if (searchable[middle].id === id) {
      return searchable[middle];
    } 
  
    if (searchable[middle].id !== id && searchable.length === 1) {
      return null;
    }
  
    const left = searchable.slice(0, middle);
    const right = searchable.slice(middle);
    const lastLeftElement = left[left.length - 1]
  
    if (id > lastLeftElement.id) {
      searchable = right;
    } else {
      searchable = left;
    }
  }
}

// unit tests
// do not modify the below code
const lookingFor = { id: 5, name: "Brian" };
console.log(linearSearch(
  5, [
        { id: 1, name: "Sam" },
        { id: 11, name: "Sarah" },
        { id: 21, name: "John" },
        { id: 10, name: "Burke" },
        { id: 13, name: "Simona" },
        { id: 31, name: "Asim" },
        { id: 6, name: "Niki" },
        { id: 19, name: "Aysegul" },
        { id: 25, name: "Kyle" },
        { id: 18, name: "Jem" },
        { id: 2, name: "Marc" },
        { id: 51, name: "Chris" },
        lookingFor,
        { id: 14, name: "Ben" }
      ]))
  // expect(
  //   linearSearch(5, [
  //     { id: 1, name: "Sam" },
  //     { id: 11, name: "Sarah" },
  //     { id: 21, name: "John" },
  //     { id: 10, name: "Burke" },
  //     { id: 13, name: "Simona" },
  //     { id: 31, name: "Asim" },
  //     { id: 6, name: "Niki" },
  //     { id: 19, name: "Aysegul" },
  //     { id: 25, name: "Kyle" },
  //     { id: 18, name: "Jem" },
  //     { id: 2, name: "Marc" },
  //     { id: 51, name: "Chris" },
  //     lookingFor,
  //     { id: 14, name: "Ben" }
  //   ])
  // ).toBe(lookingFor);

  // const lookingFor = { id: 23, name: "Brian" };
  // console.log(binarySearch(23, [
  //   { id: 1, name: "Sam" },
  //   { id: 3, name: "Sarah" },
  //   { id: 5, name: "John" },
  //   { id: 6, name: "Burke" },
  //   { id: 10, name: "Simona" },
  //   { id: 12, name: "Asim" },
  //   { id: 13, name: "Niki" },
  //   { id: 15, name: "Aysegul" },
  //   { id: 17, name: "Kyle" },
  //   { id: 18, name: "Jem" },
  //   { id: 19, name: "Marc" },
  //   { id: 21, name: "Chris" },
  //   lookingFor,
  //   { id: 24, name: "Ben" }
  // ]))