// Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

// Example 1:

// Input: [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
// Example 2:

// Input: [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.

// Credit: https://leetcode.com/problems/contiguous-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let max = 0, count = 0, hash = {0:-1}
    for (let i=0;i<nums.length;i++) {
        if (nums[i] == 0) count--
        else count++

        if (hash[count]!== undefined) max = Math.max(max, i - hash[count])
        else hash[count] = i 
    }
    return max
};