var MyQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};
/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    while (this.stack2.length) {
        this.stack1.push(this.stack2.pop());
    }
    this.stack1.push(x)
};
/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    this.stack2.push(this.stack1.pop());
    let firstElement=null
    if(this.empty() == false){
       return firstElement = this.peek();
    }
    return this.stack1
};
/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack1.length ? this.stack1[0] : this.stack2[this.stack2.length-1];
};
/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if(this.stack1.length==0){
        return true
    }
    return false
};
