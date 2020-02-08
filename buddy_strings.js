// Given two strings A and B of lowercase letters, return true if and only if we can swap two letters in A so that the result equals B.

 

// Example 1:

// Input: A = "ab", B = "ba"
// Output: true
// Example 2:

// Input: A = "ab", B = "ab"
// Output: false
// Example 3:

// Input: A = "aa", B = "aa"
// Output: true
// Example 4:

// Input: A = "aaaaaaabc", B = "aaaaaaacb"
// Output: true
// Example 5:

// Input: A = "", B = "aa"
// Output: false
 

// Note:

// 0 <= A.length <= 20000
// 0 <= B.length <= 20000
// A and B consist only of lowercase letters.

var buddyStrings = function(A, B) {
    if(A.length !== B.length) return false
    if(A === B){
        if(new Set(A).size !== A.length) return true
        return false
    }
    let swap = []
    let counter = 0
    for(let i = 0; i < A.length; i++){
        if(A[i] !== B[i]){
            if(swap.length === 0){
                swap.push(A[i],B[i])
            }else{
                if(A[i] === swap.pop() && B[i] === swap.pop()) counter++
            }
        }
    }
    return counter === 1
};