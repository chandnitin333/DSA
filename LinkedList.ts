

class MyNode {
    data: any = null;
    next: any
}


class MyLinkedList<T> {
    head: null
    constructor() {
        this.head = null
    }

    createNewList(elementData: number): void {
        let newNode = new MyNode();
        newNode.data = elementData;
        newNode.next = null
        let curr: any = this.head
        if (curr == null) {
            curr = newNode;
        } else {
            let temp: any = new MyNode();
            temp = curr
            while (temp != null) {
                temp = temp.next
            }

            temp.next = newNode
        }
    }
}


let myList = new MyLinkedList()

myList.createNewList(10)
myList.createNewList(20)
console.log(myList)