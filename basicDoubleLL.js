class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null
    }
}

class DoubleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    isEmpty(){
        console.log("this list is empty")
        return this
    }
    insertAtFront(data){
        const newFront = new Node(data)
        let runner = this.head
        if(runner === null){
            this.head = newFront
            this.tail = newFront
        }else{
            this.head.previous = newFront
            newFront.next = this.head
            this.head = newFront
        }
        return this
    }
    
}