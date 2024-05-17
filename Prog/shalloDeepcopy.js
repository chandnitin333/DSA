const originalArray = [1, 2, [3, 4]];
//A shallow copy creates a new object or array and copies the values of the original object or array to the new one
//If the original object or array contains references to other objects or arrays
console.log("=========================ORIGINAL ARRAY===========================")


const shallowCopy = [...originalArray];

console.log(shallowCopy);  // [1, 2, [3, 4]]

shallowCopy[2][0] = 99;
console.log("=========================AFTER  shallowCopy[2][0] = 99 ===========================")
console.log(originalArray);

console.log("======================DEEP COPY==========================")


// create newly new object Changes made to the nested objects or arrays inside 
// the deep copy do not affect the original object or array, and vice versa

const deepCopy = JSON.parse(JSON.stringify(originalArray));

console.log(deepCopy);  // [1, 2, [3, 4]]

deepCopy[2][0] = 99;

console.log("======================AFTER deepCopy[2][0] = 99;==========================")
console.log(originalArray); 