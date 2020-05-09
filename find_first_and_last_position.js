// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Credit: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var searchRange = function(nums, target) {
//     return [nums.indexOf(target), nums.lastIndexOf(target)]
// };

var searchRange = function(nums, target) {
    let left = 0, right = nums.length - 1,
      start = -1, end = -1, mid = -1
  
    while (left <= right) {
      mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        start = mid;
        end = mid;
        while (nums[start - 1] === target) {
          start -= 1;
        }
        while (nums[end + 1] === target) {
          end += 1;
        }
        return [start, end];
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return [start, end];
  };