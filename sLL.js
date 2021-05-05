class Node{
    constructor(value,priority){
        this.val = value;
        this.pri = priority;
        this.next = null;
    }
}

// class SLLPriority{
//     constructor(){
//         this.head = null;
//     }
//     append(){
//         newNode = SLNodePri(value,priority);
//         if (!this.head){
//             this.head = newNode
//         }
//         if(node1.pri < this.head.pri){
//             node.next = this.head
//             this.head = node
//             return this
//         }
//         var runner = this.head 
//         while ( runner.next && runner.next.pri <= node.pri){
//             runner = runner.next
//         }
//     }
//shawns example
    enqueue(value, pri) {
        var node = new SLNodePri(value,pri)
        if (!this.head) {
            this.head = node
            return this
        }
        if (node.pri < this.head.pri) {
            node.next = this.head
            this.head = node
            return this
        }
        var runner = this.head
        while (runner.next && runner.next.pri <= node.pri) {
            runner = runner.next
        }
        if (!runner.next) {
            runner.next = node
        } else {
            node.next = runner.next
            runner.next = node
        }
        return this
    }
    print(){
        var runner = this.head;
        var output = "";
        while(runner){
            output += `|| Val: ${runner.val} Priority: ${runner.pri} ||`;
            if(runner.next){
                output += " => "
            }
            runner = runner.next;
        }
        console.log(output);
    }
}

var node1 = new SLNodePri(1,2);
var node2 = new SLNodePri(3,6);
var listSLL = new SLLPriority();
console.log(listSLL);




function SLMaxToBack(node) {

    //check some edge cases for lengths of 0, 1 and 2
    if (SLLength(node) <= 1) {
      return node;
    }
  
    if (SLLength(node) == 2) {
      if (node.value > node.next.value) {
        new_head = node.next;
        new_head.next = node;
        node.next = null;
        return new_head;
      }
      else {
        return node;
      }
    }
    // setting up variables we'll need
    var head = node;
    var max = SLMax(node);
    var before_max = null;
    var runner = node;
  
    // one last edge case - the head is the largest node
    if (runner == max) {
      console.log("Head is already max")
      while (runner.next != null) {
        runner = runner.next;
      }
      new_head = head.next;
      head.next = null;
      runner.next = head;
      return new_head;
    }
  
    while (runner.next != null) {
      if (runner.next == max) {
        before_max = runner;
      }
      runner = runner.next;
    }
  
    if (runner == max) {
      return head;
    }
  
  
    else {
      before_max.next = max.next;
      max.next = null;
      runner.next = max;
      return head;
    }
  }

  function maxToBack(head) {
    if (head === null || head.next === null) {
        return head;
    }

    let max = head.value;
    let beforeMax = null;
    let runner = head;
    while (runner.next !== null) {
        if (runner.next.value > max) {
            max = runner.next.value;
            beforeMax = runner;
        }
        runner = runner.next;
    }

    if (beforeMax === null) {
        runner.next = head;
        var temp = head.next;
        head.next = null;
        return temp;
    }

    let maxNode = beforeMax.next;
    // make beforeMax not point to max node
    beforeMax.next = beforeMax.next.next;
    // make runner (last node) point to maxNode
    // make max node point to null
    runner.next = maxNode;
    maxNode.next = null;

    return head; 
}