// Infinite Curring function 


function add(a){
    return function(b){
        if(b) return add(a+b);
        return a;
    }
}

console.log("Infinite Curring ",add(1)(2)(3)(4)())


// curring vs partial Application
//partial Application
function sum(a){
    return function(b,c){
        return a + b  + c
    }
}

console.log(sum(1)(2,3))


const func = (function(a){
    delete a;
    return a
})(5)

console.log(func)