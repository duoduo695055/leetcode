/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function(root) {
    if (!root) return[]
    let ans=[]
    
    const dfs=(root)=>{
        ans.push(root.val)
        
        for (let i=0;i<root.children.length;i++){
            dfs(root.children[i])
        }
        
    }
    dfs(root)
    return ans
};