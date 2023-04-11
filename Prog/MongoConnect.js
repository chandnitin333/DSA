// const {MongoClient} = require('mongodb')

let url ="mongodb://localhost:27017/javapoit";
// const client  =new  MongoClient(url)
// client.connect(function(errr,db){
//     if(!errr){
//         console.log("Mongo Db Conected..!");
//         db.close();
//     }else{
//         console.log(errr)
//     }
// });


const mongoose =  require('mongoose');

mongoose.connect(url).then(()=>{
        console.log("DB Connect");
}).catch((err)=>{
    console.log(err)
});
