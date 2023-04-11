const { reject } = require("async");


const myfunction = async function(){
    return new Promise((resolved,reject)=>{
        setTimeout(() => {
            resolved("Nitin");
        }, 2000);
    })
           
}



const getData = async function(){
    console.log("Please Wait.....");
    let data= await myfunction();
    console.log("Hello, I am ",data)
}


getData();