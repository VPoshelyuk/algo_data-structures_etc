// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Credit: https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const parPairs = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }
    let stack = []
    
    for(let i = 0; i < s.length; i++){
        if(parPairs.hasOwnProperty(s[i])){
            stack.push(s[i])
        }else if(parPairs[stack[stack.length - 1]] === s[i]){
            stack.pop()
        }else{
            return false
        }
    }
    
    return stack.length === 0 ? true : false
};