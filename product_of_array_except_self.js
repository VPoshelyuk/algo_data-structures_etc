// Given an array nums of n integers where n > 1,  return an array output 
// such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array 
// (including the whole array) fits in a 32 bit integer.

// Note: Please solve it without division and in O(n).
// Credit: https://leetcode.com/problems/product-of-array-except-self/

var productExceptSelf = function(nums) {
    let left_product = [1], right_product = new Array(nums.length).fill(1), result = []
    
    for(let i = 1; i < nums.length; i++){
        left_product[i] = nums[i - 1] * left_product[i - 1]
    }
    
    for(let i = nums.length-2; i >= 0; i--){
        right_product[i] = nums[i + 1] * right_product[i + 1]
    }
    
    for(let i = 0; i < nums.length; i++){
        result[i] = left_product[i] * right_product[i]
    }
    
    return result
};