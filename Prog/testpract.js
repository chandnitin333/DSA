
console.log("Closure Function")


function OuterFunction(str){
    return function(str1){
        console.log(`Inner : ${str1}   Outer Function : ${str}`)
    }
}

const myFun =  new OuterFunction("Hi I am Outer")

myFun("I am Inner ")


console.time("6")
let outArr =[]
for(i =0 ; i < 100000000; i++){
    outArr.push(i)
}

console.log(outArr.includes(2000));

console.timeEnd("6");