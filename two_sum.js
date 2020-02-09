// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
//  Credit: https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            let num1 = nums[i]
            let num2 = nums[j]
            if(num1 + num2 === target && i !== j){
                return [i,j]
            }
        }
    }
};