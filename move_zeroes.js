// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.
// Credits: https://leetcode.com/problems/move-zeroes/

var moveZeroes = function(nums) {
    let min = 0
    let max = nums.length-1
    
    while(min < max){
        if(nums[min] === 0){
            nums.splice(min,1)
            nums.push(0)
            max--
        }else{
            min++
        }
    }
};