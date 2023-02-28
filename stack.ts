class Stack {

    item: number[];
    constructor() {
        this.item = [];
    }

    add(element: number): number {
        return this.item.push(element);
    }

    remove(): number[] {
        
        if (this.isEmpty(this.item) == 0) {
             this.item.pop();
        } else {
            return this.item;
        }
       
        return this.item;

    }

    printStack(): void {
        console.log(this.item);
    }


    isEmpty(item: number[]): number {
       
        return (item.length == 0) ? 1 : 0;

    }


}


let stack = new Stack();

stack.add(10);
stack.add(20);
stack.add(30);

stack.printStack();

stack.remove();


stack.printStack();




