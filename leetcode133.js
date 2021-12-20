/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
 var cloneGraph = function(node) {
    
    if (node==null) return null
    
    const visited=new Map()
    const queue=[] //用来记录是不是访问了所有节点
    queue.push(node)
    const copyNode=new Node(node.val,[]) //初始化，用节点的value作为key，此时节点的邻居还是空集
    visited.set(node.val,copyNode) //visited用来记录旧节点的value和复制的节点之间的对应关系
    
    
    while(queue.length){
        const cur_node=queue.shift()
        for (const neighbor of cur_node.neighbors){
            if(!visited.has(neighbor.val)){
                queue.push(neighbor)
                const copyNeighbor=new Node(neighbor.val,[])
                visited.set(neighbor.val,copyNeighbor) //复制邻居节点，并且添加到visited
            }
        const cur_clone_node=visited.get(cur_node.val)
        const cur_neighbor_node=visited.get(neighbor.val)
        cur_clone_node.neighbors.push(cur_neighbor_node)
        }//这里我们不仅需要复制节点，还需要复制领接关系，每一个节点的所有邻居节点复制完成之后，将这些节点添加到这个复制节点的领接表中
        
    }
    return copyNode 
    
};