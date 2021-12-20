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
 var minDiffInBST = function(root) {
    let pre=-1
    
    let ans=Number.POSITIVE_INFINITY
    
    const dfs=(node)=>{
        if(!node) return 
        
        dfs(node.left)
        if(pre==-1){
            pre=node.val //始终要用pre来记录最新的节点的值
        }
        else{
            ans=Math.min(node.val-pre,ans)
            pre=node.val //这里相当于在遍历的时候就始终在记录相邻值之间的最小差值
        }
        dfs(node.right)
    }
    dfs(root)
    return ans
    
};