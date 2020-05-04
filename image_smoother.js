// Given a 2D integer matrix M representing the gray scale of an image, you need to design a smoother to make the gray scale of each cell becomes the average gray scale (rounding down) of all the 8 surrounding cells and itself. If a cell has less than 8 surrounding cells, then use as many as you can.

// Example 1:

// Input:
// [[1,1,1],
//  [1,0,1],
//  [1,1,1]]
// Output:
// [[0, 0, 0],
//  [0, 0, 0],
//  [0, 0, 0]]
// Explanation:
// For the point (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
// For the point (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
// For the point (1,1): floor(8/9) = floor(0.88888889) = 0
// Note:

// The value in the given matrix is in the range of [0, 255].
// The length and width of the given matrix are in the range of [1, 150].

// Credit: https://leetcode.com/problems/image-smoother/

/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
    let rows = M.length, cols = M[0].length
    let ret = new Array(rows).fill(0).map(_ => new Array(cols).fill(0))
    for(let r = 0; r < rows; ++r) {
        for(let c = 0; c < cols; ++c) {
            let count = 0
            for(let x of [-1, 0, 1]){
                let rx = r + x
                for(let y of [-1, 0, 1]){
                    let cy = c + y
                    if(rx < rows && rx >= 0 && cy < cols && cy >= 0) {
                        count++
                        ret[r][c] += M[rx][cy]
                    }
                }
            }
            ret[r][c] = Math.floor(ret[r][c] / count)
        }
    }
    return ret
}