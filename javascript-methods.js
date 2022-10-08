/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function (callbackFn) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] === undefined) continue;
    arr[i] = callbackFn(this[i], i, this);
  }
  return arr;
};

// FILTER //
Array.prototype.myFilter = function (callbackFn) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  for(let i = 0; i < this.length ; i++){
    if(this[i] != undefined && callbackFn(this[i], i, this)) return true;
  } 
  return false;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  for(let i = 0; i < this.length ; i++){
    if(this[i] === undefined || !callbackFn(this[i], i, this)) return false;
  } 
  return true;
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  // Place your code here.
};s
=======
Array.prototype.mySome = function (callbackFn) {
  // Place your code here.
};

// EVERY //
Array.prototype.myEvery = function (callbackFn) {
  // Place your code here.
};

// REDUCE //
Array.prototype.myReduce = function (callbackFn) {
  if (this.length === 0) {
    throw new TypeError("reduce of empty array with no initial value");
  }
  if (this.length === 1) {
    return this[0];
  }
  let val = this[0];
  for (let i = 0; i < this.length; i++) {
    if (this[i] === undefined) continue;
    val = callbackFn(val, this[i]);
  }
  return val;
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] == searchElement){
      return true;
    }
  }
  return false;
};


// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] == searchElement){
      return i;
    }
  }
  return -1;
};


// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  for (let i = this.length - 1; i >= 0; i--) {
    if (this[i] == searchElement){
      return i;
    }
  }
  return -1;
};


// KEYS //
Object.myKeys = function (object) {
  Object.myKeys = function (object) {
    const arr = [];
    for (const i in object) {
      arr.push(i);
    }
    return arr;
  };
};

// VALUES //
Object.myValues = function (object) {
  const arr = [];
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      arr.push(object[key]);
    }
  }
  return arr;
};
