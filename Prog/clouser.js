/**
 * closure Function 
 */

// Lexical Scope ::

// global scope
function outerFunction(str){
      // outer Scope
     function InnerFunction(str2){
       //Inner scope
        console.log(`[${str}] :: ${str2}`)
     }
     return InnerFunction;
}

let err = new outerFunction("ERROR")
let info = new outerFunction("INFO")
err("Console error");
info("Console info")

