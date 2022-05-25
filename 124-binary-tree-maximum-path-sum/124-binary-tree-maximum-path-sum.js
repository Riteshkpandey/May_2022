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
 * @return {number}
 */
var maxPathSum = function(root) {
    if(!root) return 0;
    let maxi=-Infinity;
    findMaxi(root);
    function findMaxi(root)
{
    if(!root) return 0;
    
    let leftSum=findMaxi(root.left);
    let rightSum=findMaxi(root.right);
    maxi=Math.max(maxi,leftSum+root.val+rightSum);
    return Math.max(0,leftSum+root.val,rightSum+root.val);
}

    return maxi;
    
};

