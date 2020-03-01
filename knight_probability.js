// On an NxN chessboard, a knight starts at the r-th row and c-th column and attempts to make exactly K moves. The rows and columns are 0 indexed, so the top-left square is (0, 0), and the bottom-right square is (N-1, N-1).

// A chess knight has 8 possible moves it can make, as illustrated below. Each move is two squares in a cardinal direction, then one square in an orthogonal direction.

 



 

// Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.

// The knight continues moving until it has made exactly K moves or has moved off the chessboard. Return the probability that the knight remains on the board after it has stopped moving.

 

// Example:

// Input: 3, 2, 0, 0
// Output: 0.0625
// Explanation: There are two moves (to (1,2), (2,1)) that will keep the knight on the board.
// From each of those positions, there are also two moves that will keep the knight on the board.
// The total probability the knight stays on the board is 0.0625.

// Credit: https://leetcode.com/problems/knight-probability-in-chessboard/

const createKey = (row, col, moves) => {
    return `${moves}:${row}:${col}`
}

var knightProbability = function(N, K, r, c) {
    const memo = {}
    
    function dfs(row, col, moves) {
        
        const key = createKey(row, col, moves)
        
        if(memo[key]) {
            return memo[key]
        }
        
        if(row < 0 ||
           row >= N ||
           col < 0 ||
           col >= N
        ) {
            return 0
        }
        
        if(moves === 0) {
            return 1
        }
        
        let inbound = 0
        
        inbound += dfs(row-2, col-1, moves-1)
        inbound += dfs(row-1, col-2, moves-1)
        inbound += dfs(row+1, col-2, moves-1)
        inbound += dfs(row+2, col-1, moves-1)
        inbound += dfs(row-2, col+1, moves-1)
        inbound += dfs(row-1, col+2, moves-1)
        inbound += dfs(row+1, col+2, moves-1)
        inbound += dfs(row+2, col+1, moves-1)
        
        memo[key] = inbound
        
        return inbound
    } 
    
    let onboard = dfs(r, c, K)
    return onboard/Math.pow(8,K)
};