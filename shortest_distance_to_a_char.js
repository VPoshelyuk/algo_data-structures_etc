// Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

// Example 1:

// Input: S = "loveleetcode", C = 'e'
// Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 

// Note:

// S string length is in [1, 10000].
// C is a single character, and guaranteed to be in string S.
// All letters in S and C are lowercase.
// https://leetcode.com/problems/shortest-distance-to-a-character/

var shortestToChar = function(S, C) {
    let result = [], lastC = -1
    for(let i = 0; i < S.length; i++){
        if(S[i] === C){
            while(result.length-1 !== i){
                if(lastC !== -1 && result.length - lastC < i - result.length){
                    result.push(result.length - lastC) 
                }else{
                    result.push(i - result.length) 
                }
            }
            lastC = i
        }
    }
    while(result.length !== S.length)result.push(result.length - lastC) 
    return result
};