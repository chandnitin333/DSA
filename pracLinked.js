class Node {
    data = null
    next = null
}



class MyList {
    head = null
    constructor(){
        this.head = null
    }


    createNewList(val){
       let  newNode =  new Node()
        newNode.data =  val;
        newNode.newNode = null
        if(this.head ==null){
            this.head =  newNode
        }else{
            let temp =  new Node()
            temp =  this.head
            while(temp.next != null){
                temp = temp.next
            }
            temp.next = newNode
        }


    }

    printList(){
    var tm =  new Node();
    tm =  this.head;
    while(tm != null){
        console.log(tm.data)
        tm =  tm.next
    }



    }

}


let mylst =  new MyList();

mylst.createNewList(10)
mylst.createNewList(20)
mylst.createNewList(30)
mylst.createNewList(40)
mylst.createNewList(50)

console.log(mylst)
mylst.printList()