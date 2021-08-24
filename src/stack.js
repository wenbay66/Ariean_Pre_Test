class Stack {
  constructor(value){
      this.list = [];
  };
  push(value){
      this.list.push(value)
  }
  pop(value){
      let tmp = JSON.parse(JSON.stringify(this.list))
      this.list.pop();
      return tmp.pop();
  }
  size(){
      return this.list.length
  }
}
const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.pop();
console.log(myStack.pop());
console.log(myStack.size());