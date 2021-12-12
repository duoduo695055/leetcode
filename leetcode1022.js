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
 var sumRootToLeaf = function(root) {
    let arr=[]
    
    const loop=(node,v)=>{
        
        if(!node.left && !node.right){
            arr.push(parseInt(v+node.val,2))
            return 
        }
        node.left&&loop(node.left,v+node.val)
        node.right && loop(node.right,v+node.val)
    }
    loop(root,'')
    
    return arr.reduce((sum,cur)=>sum+cur,0)
    
};