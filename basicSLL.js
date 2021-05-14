class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
    }
    isEmpty() {
        return this.head === null;
    }

    insertAtBack(data) {
        const newBack = new Node(data);
        let runner = this.head;
        if (runner === null) {
            this.head = newBack;
        } else {
            while (runner.next) {
                runner = runner.next;
            }
            runner.next = newBack;
        }
        return this;
    }

    moveMinToFront(){
        if(!this.head){
            console.log("this list is empty")
            return this
        }
        let runner = this.head
        let nBeforeMin = null
        let nAfterMin = null
        let minNode = this.head
        while(runner.next){
            if(runner.next.value < minNode.value){
                minNode = runner.next
                nBeforeMin = runner
                nAfterMin = runner.next.next
            }
            runner = runner.next
        }
        minNode.next = this.head
        this.head = minNode
        nBeforeMin.next = nAfterMin
        return this
    }

    moveMinToBack(){
        if(!this.head){
            console.log("this list is empty")
            return this
        }
        var runner = this.head
        let nBeforeMin = null
        let nAfterMin = null
        let minNode = this.head

        while(runner.next){
            if(runner.next.value < minNode.value){
                minNode = runner.next
                nBeforeMin = runner
                nAfterMin = runner.next.next
            }
            runner = runner.next
        }
        runner.next = minNode
        minNode.next = null
        nBeforeMin.next = nAfterMin
        return this
    }

    removeFront(){
        if(!this.head){
            console.log("there is nothing here")
            return this
        }
        this.head = this.head.next
        return this
    }

    removeBack(){
        let runner = this.head
        while(runner.next.next){
            runner = runner.next
        }
        runner.next = null
        return this
    }

    insertAtFront(data) {
        const newHead = new Node(data);
        newHead.next = this.head;
        this.head = newHead;
        return this;
    }

    contains(val) {
        let runner = this.head;
        while (runner) {
            if (runner.data === val) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }
    printSll(){
        let runner = this.head;
        while(runner){
            console.log(runner.value)
            runner = runner.next
        }
        return this;
    }
    removeValue(val){
        let runner = this.head
        while(runner){
            if (runner.next.value === val){
                runner.next = runner.next.next
                return this
            }
            runner = runner.next
        }
        return this
    }
    editValue(valueToEdit, updatedValue){
        let runner = this.head
        while(runner){
            if (runner.value === valueToEdit){
                runner.value = updatedValue
                return this
            }
            runner = runner.next
        }
        return this
    }
    prependValue(eVal,newVal,front = true){
        const newNode = new Node(newVal);
        if(!this.head){
            this.head = newNode
            return this
        }
        let runner = this.head
        while(runner.next){
            if(runner.next.value === eVal){
                newNode.next = runner.next
                runner.next = newNode
                return this
            }
            runner = runner.next
        }
        if(front) this.insertAtFront(newVal)
        else this.insertAtBack(newVal)
        return this
    }
    appendValue(eVal,newVal,back = true){
        const newNode = new Node(newVal);
        if(!this.head){
            this.head = newNode
            return this
        }
        let runner = this.head
        while(runner.next){
            if(runner.value === eVal){
                newNode.next = runner.next
                runner.next = newNode
                return this
            }
            runner = runner.next
        }
        if(back)this.insertAtBack(newVal)
        else this.insertAtFront(newVal)
        return this
    }

    removeSecondToLast(){
        if(!this.head) return this
        if(!this.head.next.next){
            this.head = this.head.next
            return this
        }
        let runner = this.head

        while(runner.next.next.next){
            runner = runner.next
        }

        let nodeToBeDestoryed = runner.next
        runner.next = nodeToBeDestoryed.next
        nodeToBeDestoryed.next = null
        return this
    }

    // remove all nodes that have a negative value
    removeNegatives(){
        if(!this.head) return this
        if(this.head.value < 0){
            this.removeFront()
        }
        let runner = this.head
        let nodeToBeDestoryed
        while(runner.next){
            if(runner.next.value < 0){
                nodeToBeDestoryed = runner.next
                runner.next = runner.next.next
                nodeToBeDestoryed.next = null
                continue
            }
            runner = runner.next
        }
        if(runner.value < 0){
            this.removeBack()
        }
        return this
    }
}

var newList = new SinglyLinkedList();
newList.insertAtFront(-45).insertAtFront(54).insertAtFront(4).insertAtFront(5).printSll().removeNegatives()
console.log("+++++++++++++++++++++++++++++++")
newList.printSll()
