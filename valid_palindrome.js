// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false

// Credit: https://leetcode.com/problems/valid-palindrome/

var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, "")
    
    for(let i = 0; i < Math.floor(s.length/2); i++){
        if(s[i] !== s[s.length - i - 1])return false
    }
    
    return true
};