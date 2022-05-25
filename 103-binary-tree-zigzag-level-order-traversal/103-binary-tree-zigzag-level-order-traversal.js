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
var zigzagLevelOrder = function(root) {
    if(!root) return [];
    let queue=[],ans=[],level=0;
    
    queue.push(root);
    while(queue.length>0)
        {
            let len=queue.length;
            let res=[];
            for(let i=0;i<len;i++)
                {
                    let temp=queue.shift();
                    if(level%2==0)
                        res.push(temp.val)
                    else
                        res.unshift(temp.val);
                    if(temp.left)
                        queue.push(temp.left);
                    if(temp.right)
                        queue.push(temp.right);
                }
        level+=1;
            ans.push(res);
        }
    return ans;
    
};