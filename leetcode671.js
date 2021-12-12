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
 var findSecondMinimumValue = function(root) {
    let ans=-1
    
    const root_value=root.val
    
    const dfs=(node) =>{
        
        if (node === null){
            return 
        }
        if (ans!==-1 && node.val>=ans){
            return
        }
        if(node.val>root_value){
            ans=node.val
        }
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    return ans 
};