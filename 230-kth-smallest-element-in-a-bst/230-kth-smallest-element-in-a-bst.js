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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var ans=null;
    check(root);
    function check(root)
    {
        if(!root) return;
        check(root.left)
        if(ans)
            return;
        k--;
        if(k==0)
            {
                ans=root.val;          
            }
        check(root.right);
    }
    return ans;
};