/*
  ArrayList
  
  We are going to approximate an implementation of ArrayList. In JavaScript terms, that means we are
  going to implement an array using objects. You should not use arrays at all in this exercise, just
  objects. Make a class (or constructor function; something you can call new on) called ArrayList.
  ArrayList should have the following properties (in addition to whatever properties you create):
  
  length - integer  - How many elements in the array
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses, 
                      and returns removed value

  As always, you can change describe to xdescribe to prevent the unit tests from running while
  you work
*/

class ArrayList {
  // code goes here
  constructor() {
    this.data = {};
    this.length = 0;
  }
  push(value) {
    this.data[this.length] = value;
    this.length++;
    return this.length;
  }
  pop() {
    const popValue = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return popValue;
  }
  get(index) {
    return this.data[index];
  }
  delete(index) {
    const removedValue = this.data[index];
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.length--;
    return removedValue;
  }
}

const array = new ArrayList();

// ✅
array.push('push value - 0')
array.push('push value - 1')
array.push('push value - 2')
array.push('push value - 3')

// ✅
// console.log('array', array)


console.log(array.pop())
console.log('array length', array.length)
console.log(array.get(0))
console.log(array.get(1))
console.log(array.get(2))
console.log(array.delete(2))
console.log(array)