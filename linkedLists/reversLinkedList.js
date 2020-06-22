/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    /*
    while node
    
    let reverseNode = node.next
    node.next = previous
    previous = node
    node = reverseNode
    
    */
    let node =head
    let previous= null;
    console.log(head)
    while(head){
        let reverseNode = head.next
        head.next = previous
        previous = head
        head = reverseNode
    }
    return previous
};
