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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    
    function findNode(root,k)
    {
        if(!root) return null;
        if(root.val===k)
            {
                if(!root.left) return root.right;
                if(!root.right) return root.left;
                let node=root.right;
                while(node.left) node=node.left;
                node.left=root.left;
                return root.right;
            }
        if(root.val>k) root.left=findNode(root.left,k);
        else root.right=findNode(root.right,k);
        return root;
    }
    
    return findNode(root,key);
    
    
};