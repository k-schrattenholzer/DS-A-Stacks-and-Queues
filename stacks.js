class Stack {
  #list = [];

  push(item) {
    this.#list.push(item);
  }

//taking off the top of the stack and returning the removed item
  pop() {
    return this.#list.pop();
  }

  peek() {
    const firstItem = this.#list.length-1;
    return this.#list[firstItem]
  }

  get size () {

  }
}

const stack = new Stack();
stack.push('fox');
stack.push('goose');
stack.push('lizard');
console.log(stack.pop()); // 'lizard'
console.log(stack.peek()); // 'goose'
console.log(stack.pop()); // 'goose'
stack.push('llama');
console.log(stack.pop()); // 'llama'
console.log(stack.peek()); // 'fox'
console.log(stack.pop()); // 'fox'
console.log(stack.pop());