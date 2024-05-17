var status = "😎" ;

setTimeout (()=>{
    const status = "😍"

    const data = {
        status : "🥑",
        getStatus(){
            return this.status
        }
    }
    console.log(data.getStatus())  // 🥑
    console.log(data.getStatus.call(this))  //😎 on browser  node undefine
},0)



let a=[3,2,4,5,6];

console.log("Max==",Math.max.apply(null,a))

console.log("Min==",Math.min.apply(null,a))