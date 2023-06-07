let http =  require('http');

const fs =  require('fs');
http.createServer((req,res)=>{
    res.write('<h1>Hello World!<h1>'); //write a response
    res.end(); //end the response
}).listen(3001,function(){
    console.log("Listen:3001")
});



const express = require('express');
  
const app = express();
const PORT = 3000;
  
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running,  and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);



// import { promisify } from 'utils';

// async function  main_function() {
//     const res = await Promise.all([
//         promisify(conn.query)(q1),
//         promisify(conn.query)(q2),
//         // all your other queries 
//     ]);
//     console.log("Continuing");

//     //continue
// }  
