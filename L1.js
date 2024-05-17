

class Node  {
    data =  null;
    next = null
}

class LinkedList{
    head = null;
    constructor(){
        this.head =  null
    }

    createList(eleData){
        let newNode =  new Node();
        newNode.data =  eleData;
        newNode.next = null
        if(this.head == null){
            this.head =  newNode
        }else{
            let temp =  new Node();
            temp =  this.head
            while(temp.next !=  null){
                temp =  temp.next
            }
            temp.next =  newNode;
        }
    }

    printList(){
        var  tm =  new Node();
        tm =  this.head;
        while(tm !=null){
            console.log(tm.data)
            tm= tm.next
        }

        
    }

    findNode(ele){
        var tm = new Node()
        tm =  this.head
        while(tm != null){
            if(tm.data == ele){
                console.log("Got the number "+tm.data)
                break;
            }else{
                tm = tm.next
            }
        }


    }

    removeDuplicate(){
        var tm = new Node()
        tm =  this.head
        while(tm != null && tm.next !=null){
        if(tm.data == tm.next.data){
            let obj =  tm.next
            delete tm.next;
            tm = obj.next
        }
        tm =  tm.next
        }
    }
}


let mylist =  new  LinkedList();

mylist.createList(10)
mylist.createList(20)
mylist.createList(30)
mylist.createList(20)

mylist.printList()

mylist.findNode(40)

mylist.removeDuplicate();
console.log("After remove Duplicate")
mylist.printList()
console.log(mylist)
