// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.
 

// Example:

// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> Returns -3.
// minStack.pop();
// minStack.top();      --> Returns 0.
// minStack.getMin();   --> Returns -2.
// 30-Day LeetCoding Challenge (Week 2/Day 3)


class MinStack{
    constructor(){
        this.stack = []
    }
   
   push(x){
       return this.stack.push(x)
   }
   
   pop(){
       return this.stack.pop()
   }
   
   top(){
       return this.stack[this.stack.length - 1]
   }
   
   getMin(){
       let min = +Infinity
       this.stack.forEach(x => {if(x < min) min = x})
       return min
   }
}

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/