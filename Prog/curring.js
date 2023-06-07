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



console.log(a)
let a = 10
let b = 20


function demo(){
    console.log(a)
    console.log(b)
    let b = 10

}


console.log(a);
console.log(b)

demo()