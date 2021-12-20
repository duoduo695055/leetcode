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
    
    let res=[]
    let queue=[]
    queue.push(root)
    
    if (!root)
        return res
    
    while(queue.length>0){
        let cur_level=[]
        let length=queue.length 
        
        for (let i=0;i<length;i++){ //注意这里的length不能用queue.length替代
            let node=queue.shift()
            cur_level.push(node.val)
            node.left&&queue.push(node.left)
            node.right&&queue.push(node.right)
        }
        res.push(cur_level)
    }
    return res
    
};