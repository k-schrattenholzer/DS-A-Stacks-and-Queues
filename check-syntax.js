// Write a function that takes a string of code and uses a Stack for determining if parenthesis and curly braces are properly matched. Return true if correctly formatted, otherwise false

function checkSyntax(str) {
  const stack = new Stack();

  const charArr = str.split("");
  // if we start with a closing curly, the only invalid character would be an opening paren.

  // this is putting each individual char(if it's one of the chars we're looking for) from the string into a stack
  // for (let char of charArr) {
  //   if (char === "{" || "}" || "(" || ")") {
  //     stack.push(char);
  //     console.log(charArr.length)
  //   }
  // }

  for (let i = 0; i < charArr.length; i++) {
    if (charArr[i] === ("{" || "}" || "(" || ")")) {
      stack.push(charArr[i]);
      console.log(charArr.length);
    }
  }

  console.log(charArr);
  // if we pop, we would access the '}'
  // let check = stack.pop();

  // if check is a closing curly, we need to keep popping and check for an open paren. -- false
  //

  // for(let i = 0; i< charArr.length; i++) {
  //   charArr[i] = stack.pop();
  // }

  // if(charArr[0] === '}') {
  //   for(let char of charArr) {
  //     '{'
  //   }
  // }
}

class Stack {
  #list = [];

  constructor(initialList) {
    if (initialList) this.#list = initialList;
  }

  push(item) {
    this.#list.push(item);
  }

  pop() {
    return this.#list.pop();
  }

  peek() {
    return this.#list[this.#list.length - 1];
  }
}

checkSyntax("if(true( { return; }");

// test cases
// [if(true)] [{] [return;] [}]	[true]
// if(true( { return; }	false
// if(true) { return;	false
// (if(true) { return; }	false
// ( true && { name: 'foo' } )	true
// ( true && { name: 'foo' ) )	false
// ( true && ( name: 'foo' } )	false
// ((2 + 3) * (4 + 11 * (2 - 1)))	true
// ((2 + 3) * (4 + 11 * 2 - 1)))	false
// ((2 + 3) * (4 + 11 * (2 - 1))	false
