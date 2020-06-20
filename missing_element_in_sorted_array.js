// Given a sorted array A of unique numbers, find the K-th missing number starting from the leftmost number of the array.

 

// Example 1:

// Input: A = [4,7,9,10], K = 1
// Output: 5
// Explanation: 
// The first missing number is 5.
// Example 2:

// Input: A = [4,7,9,10], K = 3
// Output: 8
// Explanation: 
// The missing numbers are [5,6,8,...], hence the third missing number is 8.
// Example 3:

// Input: A = [1,2,4], K = 3
// Output: 6
// Explanation: 
// The missing numbers are [3,5,6,7,...], hence the third missing number is 6.

// Credit: https://leetcode.com/problems/missing-element-in-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function(nums, k) {
    let l = 0, r = nums.length - 1
    while (l < r) {
        const mid = Math.floor((r + l) / 2)
        
        const numMissed = nums[mid] - nums[0] - mid
        
        if (numMissed < k) l = mid + 1
        else r = mid
    }
    const totalMissed = nums[l] - nums[0] - l
    if (totalMissed >= k) return nums[l] - 1 - (totalMissed - k)
    else return nums[l] + (k - totalMissed)
};