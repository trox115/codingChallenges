/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let hashMap={}
    while(head!=null){
       
        if(head.val in hashMap && head === hashMap[head.val]){
            return true
        }else{
         hashMap[head.val] = head
            }
        head= head.next
    }
    return false
};
