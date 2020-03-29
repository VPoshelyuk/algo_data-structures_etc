// Given a string s, find the longest palindromic substring in s. 
// You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"
// Credit: https://leetcode.com/problems/longest-palindromic-substring/

var longestPalindrome = (s) => {
    if (s.length < 2) return s; // base case
    
    let maxL = 0; // max left boundary
    let maxR = 0; // max right boundary
    let L = 0; // current left boundary
    let R = 0; // current right boundary
    let maxIndex = s.length - 1;
    let i = 0; // main iterator
    
    for(let i = 0; i < s.length; i++){
        L = i, R = i;
        
        // move right boundary if there are duplicates
       while (R < maxIndex && s[R] === s[R + 1]) {
            R++;
       }
       // expand left and right boundaries
       while (L > 0 && R < maxIndex && s[L - 1] === s[R + 1]) {
           L--;
           R++;
       }

       // if current palindrome is longer than max palindrome
       if (R - L > maxR - maxL) {
           maxL = L, maxR = R;
       }
   }
       
   return generateStr(s, maxL, maxR);
}


function generateStr(s, start, end) {
   let str = '';
   
   for (let i = start; i <= end; i++) {
       str += s[i];
   }
   
   return str;
}