// Write an algorithm to determine if a number n is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Return True if n is a happy number, and False if not.

// Example: 

// Input: 19
// Output: true
// Explanation: 
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

// Credit: https://leetcode.com/problems/happy-number/

/**
 * @param {number} n
 * @return {boolean}
 */
//string conversion method
// var isHappy = function(n, check = []) {
//     if(n === 1)return true
//     let num = 0
//     n = n.toString().split("")
//     for(let i = 0; i < n.length; i++){
//         num += parseInt(n[i]) ** 2
//     }
//     if(check.includes(num)) return false
//     check.push(num)
//     return isHappy(num, check)
// };


var isHappy = function(n) {
    let chSet = []
    while(n !== 1){
        if(chSet.includes(n)) return false
        chSet.push(n)
        let mod = n
        n = 0
        while(mod > 0){
            n += (mod%10) ** 2
            mod = (mod - mod%10) / 10
        }
    }
    return true
};

