/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    function check(root,ts)
    {
        if(!root) return false;
        if(!root.left && !root.right)
            return ts-root.val==0;
        return check(root.left,ts-root.val) || check(root.right,ts-root.val);
    }
    return check(root,targetSum);
};