
// function makeUser() {
//     return{
//         name:'Nitin',
//         ref : this
//     }
// }



// const user =  makeUser();

// console.log(user.ref.name);   // o/p  Undefine


// function makeUser1() {
//     return{
//         name:'Nitin',
//         ref : function (){
//             return this
//         }
//     }
// }

// const user1 =  makeUser1();

// console.log(user1.ref().name); // Nitin


// const usr = {
//     name:'Nitin',
//     logMsg(){
//         console.log(this.name)
//     }
// }



// setTimeout(usr.logMsg,1000) // getting undefine bcz setTimeout is call back function inside 
// //logMsg this keyword ref to setTimout function that why getting undefine

// setTimeout(function(){usr.logMsg()},1000)


// arrow function this keyword reference parent function 


//Output

// var length = 4;

// function callback(){
//     console.log(this.length);
// }

// const  object = {
//     length: 5,
//     method(fn){
//         fn();
//     },
// };

// object.method(callback)

// on browser 4 

// .. node undefined

var length = 4;

function callback(){
    console.log(this.length);
}

const  object = {
    length: 5,
    method(){
        console.log(arguments)
       arguments[0]();
    },
};

object.method(callback,2,3);


//Implement Cal

// const result =  calc.add(10).multiply(5).subtract(5).add(10)

// console.log(result.total)

const calc = {
    total : 0,
    add(a){
        this.total += a;
        return this;
    },
    multiply(a){
        this.total *= a;
        return this;
    },
    subtract(a){
        this.total -= a;
        return this;
    }

}

const result =  calc.add(10).multiply(5).subtract(5).add(10)
console.log(result.total)