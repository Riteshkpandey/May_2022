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
 * @return {number[]}
 */
var findMode = function(root) {
    let dict={},maxi=-Infinity,ans=[];
    
    check(root);
    function check(root)
    {
        if(!root)
            return;
        check(root.left);
        if(root.val in dict)
            {
                dict[root.val]+=1;
                            }
        else
            dict[root.val]=1;
        maxi=Math.max(maxi,dict[root.val])
        check(root.right);
    }
    console.log(dict,maxi)
    for(let [key,val] of Object.entries(dict))
        {
            if(dict[key]==maxi)
                ans.push(key);
        }
    return ans;
};