// talking it through
// for loops, and shift are O of n
// the hint made me think that it might be good to track the first el in the list in state
// like firstUp = #list[0];
// but I'm not sure how or if it's possible to reassign indices 
// splice is also O of n
// some implementations of shift can be 

class Queue {

  #list = [];
  #index = 0;


  dequeue () {
    const list = this.#list;
    const item = list[this.#index];
    this.index++;
    return item;
  }

}