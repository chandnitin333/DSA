// let a={
//     flag:1,
//     toString : function(){
//        return this.flag++
//     }
// };




// if(a==1 && a==2 && a==3){
//     console.log("Follow me..")
// }


const obj ={
    name:'nitin',
    get: function(){
        console.log(this)
    }
}
obj.get()


const obj1 ={
    name:'nitin',
    get: ()=>{
        console.log(this)
    }
}
obj1.get()


let arr = [2,3,1,5,6]

  arr.sort((a,b)=>{
   return  ((a>b)? -1 :1)

  } );

  console.log(arr)