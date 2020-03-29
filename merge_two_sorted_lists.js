// Merge two sorted linked lists and return it as a new list. 
// The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4
// Credit: https://leetcode.com/problems/merge-two-sorted-lists/

var mergeTwoLists = function(l1, l2) {
    
    let result = new ListNode(-1)
    let head = result
    while(l1 && l2){
        result.next = l1.val < l2.val ? l1 : l2
        l1.val < l2.val ? l1 = l1.next : l2 = l2.next
        result = result.next
    }
    result.next = l1 ? l1 : l2
    
    return head.next
};