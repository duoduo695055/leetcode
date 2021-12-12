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
    let base=0, count=0, max_count=0
    let ans=[]
    
    const update=(o)=>{
        if (o.val==base){
            count+=1
        }
        else{
            base=o.val
            count=1
        }
        if (count==max_count){
            ans.push(base)
        }
        if(count>max_count){
            max_count=count
            ans=[base]
        }
    }
    
    const dfs=(node)=>{
        if (!node)return 
        
        dfs(node.left)
        update(node)
        dfs(node.right)
    }
    
    dfs(root)
    return ans
    
};