

// const nums =[2,3,4,5,4,10];

// // array Map Function
// // const MultiplyThree = nums.map((val,index,arr)=>{
// //     return val * 3
// // });

// // console.log(MultiplyThree)


// // array Filter Function 

// // const evenArr =  nums.filter((val,index)=>{

// //     return (val % 2== 0)
// // })

// // console.log(evenArr)

// // poly map function

Array.prototype.myMap = function(cb){
    let temp = [];
    for(let i = 0 ; i < this.length;  i++){
        temp.push(cb(this[i],i,this));
    }
    return temp;
}


// let outArr =  nums.myMap((val,i,arr)=>{
//     return val  * 3 ;
// });

// console.log(outArr);

// // polyFill  filter

// Array.prototype.Myfilter =  function(cb){
//     let temp=[];
//     for (let i = 0; i < this.length; i++) {
//        if(cb(this[i],i,this)) temp.push(this[i]);
        
//     }
//     return temp;
// }


// let filArr =  nums.Myfilter((val,i,arr)=>{
//         return (val % 2 == 0)
// })

// console.log(filArr)



// let sumArr=  nums.reduce((acc,curVal,i,arr)=>{
//         return acc+curVal
// },0)

// console.log("sumArr==",sumArr)


// // Poly Fill of Reduce

// /**
//  * 
//  * @param {*} cb 
//  * @param {*} initialValue 
//  * @returns 
//  */
// Array.prototype.myReduce = function(cb,initialValue){
//     accumulate =  initialValue;
//     for (let i = 0; i < this.length; i++) {
//         accumulate =  accumulate?(cb(accumulate,this[i],i,this)) : this[i];
//     }
//     return accumulate;
// }


// let myPSum =  nums.myReduce((acc,curVal,i,arr)=>{
//     return acc+ curVal;
// },0)

// console.log("POLY FILL OF Reduce==Sum of arr", myPSum)


// // Map Vs Foreach
// //both are array function loop these array

// const multipltwo =  nums.map((val)=>{
//     return val * 2
// })

// const foreach2 =  nums.forEach((val,i )=>{
//     nums[i] = val * 2
// })

// console.log(multipltwo,nums)



//  Interview Question map filter and reduce
// Return only name student in capital

let students = [
    {name: "Piyush", rollNumber: 31, marks: 80 },
    { name: "Jenny", rollNumber: 15, marks: 69 },
    { name: "Kaushal", rollNumber: 16, marks: 35 },
    { name: "Dilpreet", rollNumber: 7, marks: 55 }
]
    
// use traditional  for loop

// otherwise map // Return only name student in capital

// let studentNames=  students.map((val)=> val.name.toUpperCase());
// console.log(studentNames)

// // Question 2 - Return only details of those who scored more than 60 marks && roll no greater than 15

// let details = students.filter((val)=>  (val.marks > 60) && val.rollNumber > 15
// )

// console.log(details)

// // sum of mark of all user 
// let sumOfMarks = students.reduce((acc,curr)=>{
//     return acc + curr.marks
// },0)

// console.log("sumOfMarks",sumOfMarks)


// return only name of students who score more than 60

// const names =  students.filter((stud) =>  stud.marks > 60 ).map((val)=> val.name);

// console.log(names)



// Question 6 - Return total marks for students with marks grater than 60
// //
// after 20 marks have been added to those whose scored less than 60


let details =  students.map((stud)=>{
   if(stud.marks < 60){
     stud.marks += 20
   }
   return stud
}).filter((stud)=> stud.marks > 60).reduce((acc,curr)=>{ 
    
    return acc + curr.marks
} ,0)

console.warn(details)