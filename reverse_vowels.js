// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:

// Input: "hello"
// Output: "holle"
// Example 2:

// Input: "leetcode"
// Output: "leotcede"
// Note:
// The vowels does not include the letter "y".
// Credit: https://leetcode.com/problems/reverse-vowels-of-a-string/

var reverseVowels = function(s) {
    let vowels = 'aeiouAEIOU'
    
    // let queue = s.split("").filter(c => vowels.includes(c))
    s = s.split("")
    // for(let i = 0; i < s.length; i++){
    //   if(vowels.includes(s[i])){
    //     s[i] = queue.pop()
    //   }
    // }
    
    let low = 0
    let high = s.length - 1
    while (low < high) {
        if(vowels.includes(s[low])) {
            if (vowels.includes(s[high])) {
                [s[low], s[high]] = [s[high], s[low]];
                low++;
                high--;
            } else {
                high--;
            }
        } else {
            low++;
        }
    }
    return s.join("")
};

// Uncommented way appears to be faster