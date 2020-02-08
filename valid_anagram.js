// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?
// Credit: https://leetcode.com/problems/valid-anagram/

var isAnagram = function(s, t) {
    let stObj = {}
    if(s.length !== t.length) return false
    for(let i = 0; i < s.length; i++){
        stObj[s[i]] = stObj[s[i]] ? stObj[s[i]] + 1 : 1
        stObj[t[i]] = stObj[t[i]] ? stObj[t[i]] - 1 : -1
    }
    
    return Object.keys(stObj).every(c => stObj[c] === 0)
};