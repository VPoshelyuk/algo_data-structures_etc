// Given an array of n integers nums and a target, find the number of index 
// triplets i, j, k with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.

// Example:

// Input: nums = [-2,0,1,3], and target = 2
// Output: 2 
// Explanation: Because there are two triplets which sums are less than 2:
//              [-2,0,1]
//              [-2,0,3]

// Credit: https://leetcode.com/problems/3sum-smaller/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
    let result = 0
    if(nums.length < 3) return result
    nums.sort((a, b) => a - b)
    
    for(let i = 0; i < nums.length-1; i++){
        let left = i+1, right = nums.length-1
        while(left < right){
            let sum = nums[i] + nums[left] + nums[right]
            if(sum < target){
                console.log(nums[i], nums[left], nums[right])
                result+= right - left
                left++
            }else{
                right--
            }
        }
    }
    return result
};