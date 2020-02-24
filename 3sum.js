// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// Credit: https://leetcode.com/problems/3sum/

var threeSum = function(nums) {
    if (nums.length < 3) return [];
    let res = []
    nums = nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length - 2; i += 1) {
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        let j = i + 1, k = nums.length - 1
        while(j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) {
                res.push([nums[i], nums[j], nums[k]]);
                j += 1;
                k -= 1;
                
                while(j < k && nums[j] === nums[j - 1]) j += 1;
                while(j < k && nums[k] === nums[k + 1]) k -= 1;
            }
            else if (sum > 0) k -= 1;
            else j += 1;
        }
    }
    return res;
};