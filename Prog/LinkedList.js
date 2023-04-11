

class NodeN {

    data = null;
    next = null;

}


class LinkedList {
    head = null;

    constructor() {
        this.head = null
    }


    createNewList(elementData) {

        let newNode = new NodeN();
        newNode.data = elementData;
        newNode.next = null;
        if (this.head == null) {
            this.head = newNode
        } else {
            var temp = new NodeN()
            temp = this.head;
            while (temp.next != null) {

                temp = temp.next;
            }
            temp.next = newNode;


        }



    }

    printLst() {
        let temp = new NodeN();
        temp = this.head;
        while (temp != null) {
            console.log("DATA", temp.data)
            temp = temp.next;
        }
    }


    removDublicate() {
        let temp = new NodeN();
        temp = this.head;
        while (temp != null && temp.next != null) {
            if (temp.data == temp.next.data) {
                let tobj = temp.next;
                delete temp.next;
                temp.next = tobj.next;

                break;
            }
            temp = temp.next;


        }


    }

}



newList = new LinkedList();

newList.createNewList(10)
newList.createNewList(20)
newList.createNewList(40)
newList.createNewList(40)
console.log(newList);

newList.printLst();

newList.removDublicate();
console.log("===========After Removing dublicate=========")
newList.printLst();
