// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
 

// But the following [1,2,2,null,3,null,3] is not:

//     1
//    / \
//   2   2
//    \   \
//    3    3

// Credit: https://leetcode.com/problems/symmetric-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true;
    
    const l = [root.left];
    const r = [root.right];
    
    while (l.length && r.length) {
        const le = l.pop();        
        const re = r.pop();
        if (le === re) continue;
        if (le && re){
            if (le.val != re.val) return false; 
            l.push(le.right)
            l.push(le.left)
            r.push(re.left)
            r.push(re.right)
            continue;
        }
        return false;
    }
    return true;
}