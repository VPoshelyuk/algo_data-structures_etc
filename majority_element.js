var majorityElement = function(nums) {
    let numsObj = {}
    
    for(let i = 0;i < nums.length;i++){
        numsObj[nums[i]] = numsObj[nums[i]] + 1 || 1
    }
    
    return Object.keys(numsObj).find(key => numsObj[key] > nums.length/2)
    
    // super smart solution by https://leetcode.com/dawchihliou/:
    // nums.sort((a,b) => a - b);
    // return nums[Math.floor(nums.length/2)];
};