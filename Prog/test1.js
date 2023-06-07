

let express = require('express');
let bodyParser =  require('body-parser')
let app =  express();

app.get('/',(req,res)=>{
    res.send("Working");
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.post('/user',(req,res)=>{
    console.log(req.body)
   
   let  params =  req.body.data;   // {name:'nitin', age:25}
 
   

   console.log(params);


   return  res.json(params)


})

let port = 3000;
app.listen(port,()=>{
    console.log("Server Listen Port:"+port)
})


