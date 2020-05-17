// Count the number of prime numbers less than a non-negative number, n.

// Example:

// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

// Credit: https://leetcode.com/problems/count-primes/

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let counter = 0
    let array = []
    for(let i = 2 ; i < n ; i++) {
        if (array[i]){
           continue 
        }else{
            counter++
            console.log(i)
        }
        for(let j = i+i; j <= n; j += i) {
            array[j] = j
        }
    }
    return counter
};