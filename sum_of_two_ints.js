// Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

// Example 1:

// Input: a = 1, b = 2
// Output: 3
// Example 2:

// Input: a = -2, b = 3
// Output: 1
// Credit: https://leetcode.com/problems/sum-of-two-integers/

var getSum = function(a, b) {
    if(b === 0)return a
    return getSum( a ^ b, (a & b) << 1)
};