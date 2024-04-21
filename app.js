function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }
/* Write an ES2015 Version */
const filterOutOdds = (...nums) => {
    return nums.filter(num => num % 2 ===0);
}

// findMin
// Write a function called findMin that accepts a variable number of arguments and 
// returns the smallest argument.
// Make sure to do this using the rest and spread operator.

const findMin =(...nums) =>{
    return Math.min(...nums);
}
console.log(findMin(1, 4, 12, -13)); // output: -3
console.log(findMin(1, -1));  // output: -1
console.log(findMin(3, 1)); // output: 1

// Write a function called mergeObjects that accepts two objects and returns a new object 
// which contains all the keys and values of the first object and second object.
const mergeObjects =  (obj1, obj2) => {
    return { ...obj1, ...obj2 };
}
console.log(mergeObjects({a:1, b:2}, {c:3, d:4})); // {a:1, b:2, c:3, d:4}



// Write a function called doubleAndReturnArgs 
// which accepts an array and a variable number of arguments.
//  The function should return a new array with the original array values 
//  and all of additional arguments doubled.
const doubleAndReturnArgs = (arr, ...args) =>{
    return [...arr, ...args.map(arg => arg * 2)];
}
console.log(doubleAndReturnArgs([1, 2, 3], 4, 4)); // output: [1, 2, 3, 8, 8]
console.log(doubleAndReturnArgs([2], 10, 4)); // output: [2, 20, 8]


// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!
// Make sure that you are always returning a new array or object and not modifying the existing inputs.

// removeRandom function
const removeRandom = items => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)];
  };
  
  // extend function
  const extend = (array1, array2) => {
    return [...array1, ...array2];
  };
  
  // addKeyVal function
  const addKeyVal = (obj, key, val) => {
    return { ...obj, [key]: val };
  };
  
  // removeKey function
  const removeKey = (obj, key) => {
    const newObj = { ...obj };
    delete newObj[key];
    return newObj;
  };
  
  // combine function
  const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
  };
  
  // update function
  const update = (obj, key, val) => {
    return { ...obj, [key]: val };
  };
  