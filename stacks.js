// classes (like Stack) have methods (like push, pop, and peek)
// when we call a new instance of a class, like on line 23, we also get access to it's methods (like properties, but that perform an action like functions)

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
    //could also have use this.#list.at(-1)
    // or this.#list.length ? this.#list[this.#list.length -1] : null
    return this.#list[this.#list.length -1]
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