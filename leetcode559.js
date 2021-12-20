/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
 var maxDepth = function(root) {
    if (!root){
        return 0
    }
    let children=root.children
    
    let max_depth=0
    
    for (const child of children){
        const child_depth=maxDepth(child)
        max_depth=Math.max(max_depth, child_depth)
    }
    return max_depth+1
};