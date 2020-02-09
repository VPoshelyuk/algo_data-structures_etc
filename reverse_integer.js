// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. 
// For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
//  Credit: https://leetcode.com/problems/reverse-integer/

var reverse = function(x) {
    let sign = Math.sign(x)
    
    let reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''))
    if(reversed > 2**31-1) return 0
    return reversed * sign
};