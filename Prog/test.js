// const { any, queue } = require("async");



// async function myfunc(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Nitin");
//         }, 2000);
//     });
   

// }



// async  function demo(){
//     console.log("Before")
//      let date = await myfunc();
//     console.log("after", data)

// }



// demo()
// console.log("a" + 2);
// console.log("a"-2);
// console.log("b">"a");
// console.log(2 * "b");
// console.log("2" + "4");
// console.log((2 + 3) + "a")


// function call1(){
//         console.log(a);
//         var a = 3;
//         function call2(){
//             console.log(a)
//             var a = 4;
//             console.log(a);
//         }
//         call2();
//     }
//     call1();
//     var a = 2;

// deaded later queue 






function getindex(arr,target) {
    for(let i=0; i< arr.length; i++ ){
        let sum = arr[i] + arr[i+1];
         if(sum == target){
            return [i,i+1];
         }else{
            if(arr.length == i){
                sum = arr[0] = arr[arr.length];
                if(sum == target){
                    return [0,arr.length];
                }

            }
         }
    }


}






arr = [3,2,4,5,6,1];

console.log(getindex(arr,5))















function findNumber($arr,inpNum){
    for(let i=0; i< length ;i++){

        if(arr[i] == inpNum){
            return 1
            break;
        }

    }

}



[11:22 am] M, Madan




this.a = 3;

function call1(){

    this.a = 2;

    const call2 = function (){

        console.log(this.a);

        this.a = 5;

        function call3(){

            console.log(this.a);

            this.a = 4;

        }

        call3();

    }

    call2();

}

call1()

console.log(this.a);









