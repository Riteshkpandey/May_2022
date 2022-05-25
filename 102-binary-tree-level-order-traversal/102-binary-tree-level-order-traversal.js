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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    var queue=[];
    queue.push(root);
    var ans=[];
    while(queue.length>0)
        {
            let res=[];
            let len=queue.length;
            for(let i=0;i<len;i++)
                {
                    let node=queue.shift();
                    if(node !==null)
                    res.push(node.val); 
                    if(node.left !== null)
                        queue.push(node.left);
                    if(node.right !== null)
                        queue.push(node.right);
                }
            ans.push(res);
        }
    return ans;
    
};