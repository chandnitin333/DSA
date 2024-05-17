const { reject, times } = require("async");


const myfunction = async function(){
    return new Promise((resolved,reject)=>{
        setTimeout(() => {
            resolved("Nitin");
        }, 3000);
    })
           
}



const getData = async function(){
    
    console.log("Please Wait.....");
    console.time("waitTime")
    let data= await myfunction();
    console.timeEnd("waitTime")
    console.log("Hello, I am ",data)
    
}


getData();




function getData1(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10);
    },3000);
  })  
}



async function calculate(){ 
    console.log("first")
    let data = await getData1();
    console.log("Hello")
    console.log(data)
}

calculate()