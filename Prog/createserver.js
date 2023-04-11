let http =  require('http');

http.createServer((req,res)=>{
    res.write('<h1>Hello World!<h1>'); //write a response
    res.end(); //end the response
}).listen(3001,function(){
    console.log("Listen:3001")
});