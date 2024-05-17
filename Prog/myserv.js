
const express = require('express');

const app =  express();
let port = 3000;

app.get('/',(req,res)=>{
    res.send({
        message:"Welcome to My Application"
    })
})

app.listen(port,()=>{
    console.log(`Server Listen :: ${port}`);
});

console.timeEnd