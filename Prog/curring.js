function sum(a) {
    return function (b) {
        return b ? sum(a + b) : a;
    }
}


console.log(sum(10)(20)(30)())



const obj = {
    prop: 42
}

Object.freeze(obj);

const curryUnaryFunction = (a) => (b) => (c) => a + b + c;

curryUnaryFunction(1); // returns a function: b => c =>  1 + b + c
curryUnaryFunction(1)(2); // returns a function: c => 3 + c
console.log(curryUnaryFunction(1)(2)(3));


// let a = 10
// let b = 20


// function demo() {
//     console.log(a)
//     console.log(b)
//     let b = 10

// }


// console.log(a);
// console.log(b)

// demo()