

function ex1(){
    return true;
}


function ex2(){
    return false;
}


function ex3(){
    return true;
}
const pms2 = Promise.resolve(1);
const pm1 = new Promise((resolve,reject)=>{
        setTimeout(resolve(3),200,0)
});

const pm3 = new Promise((resolve,reject)=>{
    setTimeout(reject, 200, '200ms Err');
});

const promiseArr = [pms2,pm1,pm3]

Promise.all(promiseArr).then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log("errr",err)
})


Promise.allSettled(promiseArr).then((res)=>{
    console.log(res)
})