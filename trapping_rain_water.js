// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.


// The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example:

// Input: [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6

// Credit: https://leetcode.com/problems/trapping-rain-water/

var trap = function(height) {
    if (height == null || height.length < 3) return 0;
  
    let l = 0;
    let r = height.length - 1;
  
    let lMax = 0;
    let rMax = 0;
  
    let res = 0;
  
    while (l < r) {
      lMax = Math.max(lMax, height[l]);
      if (height[l] < lMax) {
        res += lMax - height[l];
      }
  
      rMax = Math.max(rMax, height[r]);
      if (height[r] < rMax) {
        res += rMax - height[r];
      }
  
      height[l] < height[r] ? l++ : r--;
    }
  
    return res;
}