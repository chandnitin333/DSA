
// Concat

let arr = [1,2,3];
let arr2 = [4,5,6];

let res = arr.concat(arr2);

// console.log(res);

// console.log(res.at(1))

// console.log(res.copyWithin(0,3,4))

const array1 = ['a', 'b', 'c'];

const iterate =  array1.entries();

console.log(iterate.next().value)
console.log(iterate.next().value)


const array2 = [1, 30, 39, 29, 10, 13];

let result =  array2.every(myFunc);

console.log(result)

function myFunc(val,ind,arr){
   return val > 0
}
//  Fill Method

console.log(array2.fill(5,2,6))



const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result1 = words.filter(word => word.length > 6);

console.log(result1);


console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));


const groupBy = require('core-js')
const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
  ];

  const resultgrp = inventory.groupBy(({ type }) => type);

  console.log(resultgrp)


  const products = [
    { name: 'apples', category: 'fruits' },
    { name: 'oranges', category: 'fruits' },
    { name: 'potatoes', category: 'vegetables' }
  ];

  const groupByCategory = products.groupBy(product => {
    return product.category;
  });
  console.log(groupByCategory)


  











