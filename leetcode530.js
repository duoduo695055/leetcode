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
 var getMinimumDifference = function(root) {
    
    let ans=Number.MAX_SAFE_INTEGER 
    let pre=-1
    
    const dfs=(node) =>{
        if (!node) return 
        
        dfs(node.left)
        if (pre==-1){
            pre=node.val
        }
        else{
            ans=Math.min(node.val-pre,ans)
            pre=node.val
        }
        dfs(node.right)
    }
    dfs(root)
    return ans 
    
};