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
 * @return {boolean}
 */
var isValidBST = function(root) {
    return isValid(root,-Infinity,Infinity);
};

function isValid(root,min,max)
{
    if(!root) return true;
    if(root.val<min) return false;
    if(root.val>max) return false;
    return root.val>min && root.val<max && isValid(root.left,min,root.val) && isValid(root.right,root.val,max);
}