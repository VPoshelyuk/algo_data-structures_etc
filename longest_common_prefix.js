// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

// Credit: https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return ""
    
    let test = strs[0]
    let count = 0, max = Infinity
    
    for(let i=1;i<strs.length;i++){
        while(strs[i][count] === test[count] && test.length > count) count++
        max = Math.min(max, count)
        count = 0
    }
    
    return test.substring(0, max)
};