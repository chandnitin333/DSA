//  Closure is function that references variable scope in the outer scope  from its inner scop

const { _ } = require("core-js");

// Closure is gives you access to outer function scope from inner function 
// Lexical scope

// scop refer current context of your variable
// variable declared outside of the function and accessible inside of the function 

// can not be access  variable outside function variable declare inside the function 

// Global scope
function OuterFunction(){
    var name = "OuterFunction"
    //Outer scope
    function InnerFunc(num){
        //Inner scope local scop
        console.log(name,num)
    }
    return InnerFunc;
} 

// const innFnc =  OuterFunction();
// innFnc();

OuterFunction()(5)

//Closure scop chaining 
var e =10
function ChainingFunc(a){
    return function(b){
        return function(c){
            return function(d){
                return a + b + c + d + e
            }
        }
    }
}

console.log("ChainingFunc  ==",ChainingFunc(1)(2)(3)(4))


// there are 3 scope 

let count = 0;

(function printCount(){
    if(count == 0){
        let count =1
        console.log(count)
    }
    console.log(count)
})();

// write a function that would allow you to do this

// var addSix = createBase(6);
// addSix(10);  // 16
// addSix(20); // 26


function createBase(num){
    return function (num2){
        return num+ num2
    }
}

// var addSix = createBase(6);
// console.log(addSix(10));  // 16
// console.log(addSix(20)); // 26


//


//Optimism below code by using closure 

console.log("======Optimism below code by using closure ========")
function find(){
    let a = [];
    for (let index = 0; index < 1000000; index++) {
        a[index] =  index * index
        
    }
    return function(index){
    console.log(a[index]);
    }
}


// const closure =  find();

// console.time("6")
// closure(6)
// console.timeEnd("6");

// console.time("36")
// closure(36)
// console.timeEnd("36");

// console.time("50")
// closure(50)
// console.timeEnd("50");


// block scop and setTimeout solved this proble using closure

// for(var i = 0 ; i < 3 ; i++){

//     setTimeout(function log(){
//         console.log(i)
//     }, i * 1000)


// }

// print like 0 1 2
// for(var i = 0 ; i < 3 ; i++){
//     function inner(i){
//         setTimeout(function log(){
//             console.log(i)
//         }, i * 1000)
//     }
//     inner(i)

// }


// private counter 

function counter(){
    var _count =0
    function add(incr){
        _count += incr 
    }
    function get(){
        console.log("Retrieve Count Value ::" , _count)
    }
    return {
        add,get
    }
}

const c =  counter();

c.add(5);
c.add(10)
c.get()

// What is  Module Pattern 

var Module = (function(){
    function privateMethod(){
        // do something 
        console.log("private")
    }

    return {
        publicMethod :  function(){
          console.log("Public")
        },
    }
})();

Module.publicMethod();
// Module.privateMethod();


// Once function polly fill only once time call


function once(func,context){
    let ran;
    return function(){
        if(func){
            ran =  func.apply(context ||  this ,arguments);
            func = null;
        }
        return ran
    }

}

const hello =  once(()=> console.log("Hello"))
hello();
hello();
hello();
hello();

// caching // memoize function 
function  myMemoize(fn,context){
    let res = {};
    return function (...arg){
        var argCache =  JSON.stringify(arg);
        if(!res[argCache]){
            
            res[argCache] =  fn.call(context || this,...arg);
        }
       console.log(res)
        return res[argCache];
    }
}

const clumProduct =  (num1,num2)=>{
    for(let i=1; i < 100000000; i++){
        return num1 * num2;
    }
}

const memoColProd =  myMemoize(clumProduct)

console.time("First call")
console.log(memoColProd(644546,54545))
console.timeEnd("First call")




console.time("Second call")
console.log(memoColProd(644546,54545))
console.timeEnd("Second call")





