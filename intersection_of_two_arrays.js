// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Note:

// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.
// Credit: https://leetcode.com/problems/intersection-of-two-arrays-ii/

var intersect = function(nums1, nums2) {
    let short = null
    let long = null
    let result = []
    if(nums1.length > nums2.length){
        long = nums1
        short = nums2
    }else{
        long = nums2
        short = nums1
    }
    while(short.length){
        let n = short.shift()
        if(long.indexOf(n) !== -1){
            result.push(n)
            long.splice(long.indexOf(n), 1)
        }
    }
    return result
};