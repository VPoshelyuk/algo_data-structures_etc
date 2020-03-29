// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order and each of their nodes contain a single digit. 
// Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

// Credit: https://leetcode.com/problems/add-two-numbers/

var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(-1)
    let result = head
    let carry = 0
    while(l1 || l2 || carry){
        let sum = carry
        if(l1){
            sum += l1.val
            l1 = l1.next
        }
        if(l2){
            sum += l2.val
            l2 = l2.next
        }
        if (sum >= 10) {
            carry = 1;
            sum -= 10;
        } else {
            carry = 0;
        }
        head.next = new ListNode(sum)
        head = head.next
    }

    return result.next
};