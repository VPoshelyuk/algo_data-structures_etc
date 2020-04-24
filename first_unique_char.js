// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.

// Note: You may assume the string contain only lowercase letters.

// Credit: https://leetcode.com/problems/first-unique-character-in-a-string/


/**
 * @param {string} s
 * @return {number}
 */
// var firstUniqChar = function(s) {
//     let charMap = new Map()
//     s.split("").forEach((char,index) => {
//         if(!charMap.has(char)){ 
//             charMap.set(char, index)
//         }else{
//             charMap.set(char, -1)
//         }
//     })
//     let result = Array.from(charMap).find(char => char[1] !== -1)
//     return result ? result[1] : -1
// };

// Fastest solution: faster then 93% of JS submissions
var firstUniqChar = function(s) {
    let charMap = new Map()
    for(let i = 0; i < s.length; i++){
        !charMap.has(s[i]) ? charMap.set(s[i], i) : charMap.set(s[i], -1)
    }
    const indexArray = Array.from(charMap.values())
    for(let i = 0; i < indexArray.length; i++){
        if(indexArray[i] >= 0) return indexArray[i]
    }
    return -1
};

// var firstUniqChar = function(s) {
//     let map = {}
    
//     for (let char of s) {
//         map[char] ? map[char]++ : map[char] = 1
//     }
    
//     for (let i = 0; i < s.length; i++) {
//         if (map[s[i]] === 1) return i
//     }
        
//     return -1
// };