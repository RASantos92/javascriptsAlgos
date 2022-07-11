class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// a stack operates on the principal of "First In, Last Out" like waiting in line for something
class SLStack{
    constructor() {
        this.top = null
    }
    // add a given value to your stack
    push(value){
        let node = new Node(value)
        if (this.top === null) {
            this.top = node
            return ("there is not a top")
        }
        node.next=this.top
        this.top=node
        return this
    }
    
    // remove and return the top value
    pop(){
        let topVal = this.top.value
        this.top = this.top.next
        return topVal
    }

    // return (don't remove) the top value of a stack
    returnTop() {
        // your code here
    }

    printStack() {
        let runner = this.top
        while(runner.next){
            console.log(runner.value)
            runner = runner.next
        }

    }
}

var sls = new SLStack()
sls.push(3)
sls.push(18)
sls.push(12)
sls.push(78)
sls.push(56)
// console.log('top is '+sls.top.value)
// console.log('top.next is '+sls.top.next.value)
// console.log(sls.pop())
// console.log(sls.pop())
// console.log(sls.pop())
// console.log(sls.returnTop())
sls.printStack()