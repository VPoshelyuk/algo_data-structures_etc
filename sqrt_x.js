// Implement int sqrt(int x).

// Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

// Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

// Example 1:

// Input: 4
// Output: 2
// Example 2:

// Input: 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since 
//              the decimal part is truncated, 2 is returned.
// Credit: https://leetcode.com/problems/sqrtx/

var mySqrt = function(x) {
    let left = 0
    let right = Math.ceil(x/2)
    
    while(left <= right){
        let middle = Math.floor((right+left)/2)
        if(Math.floor(x/middle) === middle || Math.floor(x/(middle+1)) === middle){
            return middle
        }else if(Math.floor(x/middle) > middle){
            left = middle + 1
        }else{
            right = middle - 1
        }
    }
};