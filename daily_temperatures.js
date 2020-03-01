// Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

// For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

// Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].

// Credit: https://leetcode.com/problems/daily-temperatures/

//  O(n^2)
// var dailyTemperatures = function(T) {
//     let result = []
//     let i = 0, j = 0
//     while(i < T.length){
//         if(T[i] < T[j]){
//             result.push(j - i)
//             i++
//             j = i
//         }else if(j === T.length - 1){
//             result.push(0)
//             i++
//             j = i
//         }else{
//             j++
//         }
//     }
//     return result
// };

//  O(n)
var dailyTemperatures = function(T) {
    let stack = [], result = new Array(T.length).fill(0)
    for(let i = 0; i < T.length; i++){
        while(stack.length !== 0 && T[stack[stack.length-1]] < T[i]){
            let temp = stack.pop()
            result[temp] = i - temp
        }
        stack.push(i)
    }
    return result
};