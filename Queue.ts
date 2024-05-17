class MyQueue {

    myQueue: any;
    rear: number;
    front: number;
    constructor() {
        this.myQueue = {};
        this.rear = 0;
        this.front = 0
    }

    addQueue(item:any){
        this.myQueue[this.rear] = item;
        this.rear ++ ;
    }

    delQueue(): any{
        if(!this.isEmpty(this.myQueue)){
            const item =  this.myQueue[this.front];
            delete this.myQueue[this.front];
            this.front++;
            return item;
        }
    }

    isEmpty(myQueue:object):number{

        return this.rear ==0 ? 1 : 0 
    }

    printQueue(){
        console.log(this.myQueue)
    }


}

let myq = new MyQueue();
myq.addQueue(10);
myq.addQueue(20);
myq.addQueue(30);
myq.addQueue(40);
myq.addQueue(50);
myq.printQueue();
// myq.delQueue();
// myq.delQueue();
myq.printQueue();

console.log(myq)