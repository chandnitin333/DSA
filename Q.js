

class MyQ {
    rear = 0
    front =0
    qData = {}
    addQ(eleData){
        this.qData[this.rear++] = eleData
    }

    removeQ(){
        if(this.rear != this.front){
            let temp =  this.qData[this.front]
            delete this.qData[this.front]
            this.front ++ ;
            return temp
        }

    }
}



let mq = new MyQ();
mq.addQ(10)
mq.addQ(20)
mq.addQ(30)
console.log(`Remove Q Element is :${ mq.removeQ()}`)
console.log(mq)
