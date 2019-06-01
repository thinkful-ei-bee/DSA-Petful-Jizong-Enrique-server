class _Node {
    constructor(data, next) {
      this.data = data;
      this.next = next;
    }
  }
  
  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
    }
  
    enqueue(data) {
      const node = new _Node(data);
  
      if (this.first === null) {
        this.first = node;
      }
  
      if (this.last) {
        this.last.next = node;
      }
  
      this.last = node;
    }
    
    peek(){            
      if (this.first.next === undefined) {        
        return 'queue is empty';
      }
      return this.first.data;
    }

    dequeue() {      
      if (this.first === null || this.first === undefined) {
        return;
      }
  
      const node = this.first;
      this.first = this.first.next;
  
      if (node === this.last) {
        this.last = null;        
        return 
      }
      if(node.data===undefined){        
        return null
      }
      return node.data;
    }
  }
  
  module.exports = Queue;