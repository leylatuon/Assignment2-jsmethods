/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function(callbackFn) {
  // Place your code here.
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  let arr = [];
  // for (let i = 0; i < this.length; i++) {
  //   let result = callbackFn(this[i], i, this);
  //   if(result){
  //     arr.push(this[i]);
  //   }
  // }
  for (let i = 0; i < this.length; i++) {
    if (callbackFn.call(this[i], i, this))
      arr.push(this[i]);
  }
  return arr;
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  // Place your code here.
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  // Place your code here.
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  // Place your code here.
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  // Place your code here.
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  // Place your code here.
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  // Place your code here.
};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};

// TEST //
console.log([1, , undefined].myFilter((x) => x === undefined)); // [undefined]
console.log([1, , undefined].filter((x) => x === undefined)); // [undefined]
console.log([1, , undefined].myFilter((x) => x !== 2)); // [1, undefined]
console.log([1, , undefined].filter((x) => x !== 2)); // [1, undefined]