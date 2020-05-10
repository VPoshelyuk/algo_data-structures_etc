// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

// Credit: https://leetcode.com/problems/group-anagrams/

var groupAnagrams = function(strs) {
    const map = {};
    strs.forEach(s => {
        const key = new Array(28).fill(0);
        for (c of s) key[c.charCodeAt(0) - 97]++;
        map[key] ? map[key].push(s) : map[key] = [s];
    })
    return Object.values(map);
};