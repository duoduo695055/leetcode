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
 * @return {boolean}
 */
 var findTarget = function(root, k) {
    const ans=[]
    function traverse(node) {
        if (!node) {
            return ;
        }
        traverse(node.left)
        
        ans.push(node.val)
        traverse(node.right)
    }

    traverse(root)
    console.log(ans)
    
    for(let i=0;i<ans.length;i++){
        if (ans.indexOf(k-ans[i])!=-1 && ans.length!=1
           ){
            console.log(ans.indexOf(k-ans[i]))
            return true
        }
    }
    return false 
};