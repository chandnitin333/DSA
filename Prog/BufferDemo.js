let b =  new Buffer.alloc(1000);
let str = "------------------";

b.write(str);
console.log(str.length) 
console.log(b.length)