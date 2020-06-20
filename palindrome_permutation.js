// Given a string, determine if a permutation of the string could form a palindrome.

// Example 1:

// Input: "code"
// Output: false
// Example 2:

// Input: "aab"
// Output: true
// Example 3:

// Input: "carerac"
// Output: true

// Credit: https://leetcode.com/problems/palindrome-permutation/

var canPermutePalindrome = function(s) {
    let result = {}
    
    for(let i = 0; i < s.length; i++){
        if(!result[s[i]]) result[s[i]] = 1
        else delete result[s[i]]
    }
    
    return Object.keys(result).length <= 1 
};