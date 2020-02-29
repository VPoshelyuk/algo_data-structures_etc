// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

// Example 1:

// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:

// Input:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

// Credit: https://leetcode.com/problems/spiral-matrix/

var spiralOrder = function(matrix) {
    if (matrix == null || matrix.length == 0) return matrix;
    let dRow = [0,+1,0,-1], dColumn = [+1,0,-1,0]
    let r = 0, c = 0, direction = 0
    let result = []
    for (let i=0;i<matrix.length * matrix[0].length;i++) {
        result.push(matrix[r][c])
        matrix[r][c] = null
        if (matrix[r+dRow[direction]] == null 
        || matrix[r + dRow[direction]][c + dColumn[direction]] == null) {
            direction = (direction + 1) % 4
        }
        r+= dRow[direction]
        c+= dColumn[direction]
    }
    return result
}