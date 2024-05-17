
// Q1 Function XPathExpression

// const myFunc =  function (num){
//     return num * num
// }

// console.log(myFunc(5))

//Q2  What are  first class function 

// function can be treated as variable is know as first class function


// (function (x){
//     return (function (y){
//         console.log(x);
//     })(2);
// })(1);


function multiply(...nums){ // rest operator  always be the last one  // function declaration declarer parameters
    return nums[0] * nums [1];
}

let arr = [3,2]
console.log(multiply(...arr))  // this call spred operator  // function call pass arguments


const fn =  (a,x,y,...num)=>{   // spred always be the last one  
    console.log(x,y,num)
}

fn(2,4,5,6,7,8)

// Normal function vs arrow function 

//1 Syntax  is different  
//2 implicit return keyword  
// 3 argument keyword normal function accessible argument keyword but in array can accessible not defined
// 4 this keyword  in arrow function getting undefined in not function getting value 


