// Given a binary tree, find the length of the longest path where each node in the path has the same value. This path may or may not pass through the root.

// The length of path between two nodes is represented by the number of edges between them.

 

// Example 1:

// Input:

//               5
//              / \
//             4   5
//            / \   \
//           1   1   5
// Output: 2

 

// Example 2:

// Input:

//               1
//              / \
//             4   5
//            / \   \
//           4   4   5
// Output: 2

 

// Note: The given binary tree has not more than 10000 nodes. The height of the tree is not more than 1000.

// Credit: https://leetcode.com/problems/longest-univalue-path/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {
    let count = 0
    const traverse = (parent, node) => {
        if(!node) return 0
        let left = traverse(node.val, node.left)
        let right = traverse(node.val, node.right)
        
        count = Math.max(count, left + right)
        return node.val === parent ? Math.max(left, right) + 1 : 0
    }
    if (root) traverse(null, root)
    return count
};

