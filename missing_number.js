// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// Example 1:

// Input: [3,0,1]
// Output: 2
// Example 2:

// Input: [9,6,4,2,3,5,7,0,1]
// Output: 8

// Credit: https://leetcode.com/problems/missing-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // nums = nums.sort((a, b) => a-b)
    // for(let i = 0; i < nums.length - 1; i++){
    //   if(nums[i + 1] !== nums[i] + 1) return nums[i] + 1
    // }
    // return nums[0] !== 0 ? 0 : nums[nums.length - 1] + 1
    
    const result = new Array(nums.length+1).fill(-1);
    for(const num of nums) {
        result[num] = num;
    }
    return result.indexOf(-1);
};