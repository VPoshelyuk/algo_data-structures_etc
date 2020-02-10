// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true
// Credit: https://leetcode.com/problems/contains-duplicate/

// first-go solution
// var containsDuplicate = function(nums) {
//     let resObj = {}
//     for(let i = 0; i < nums.length; i++){
//         resObj[nums[i]] = resObj[nums[i]] + 1 || 1
//     }
//     return Object.keys(resObj).find(key => resObj[key] >= 2) ? true : false
// };

// improved one
var containsDuplicate = function(nums) {
    let res = new Set(nums)
    return res.size !== nums.length
};