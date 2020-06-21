// Remove all elements from a linked list of integers that have value val.

// Example:

// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5

// Credit: https://leetcode.com/problems/remove-linked-list-elements/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(!head)return null
    let cur = head.next, prev = head
    while(cur){
        if(cur.val === val){
            cur = cur.next
            prev.next = cur
        }else{
            prev = cur;
            cur = cur.next
        }
    }
    if(head.val === val)return head.next
    return head
};