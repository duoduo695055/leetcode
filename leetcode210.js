/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 var findOrder = function(numCourses, prerequisites) {
    let graph=new Map()
    let indegree=new Array(numCourses).fill(0)
    buildgraph()
    return bfs(graph, indegree)
    
    function buildgraph(){
        for (let [e,v] of prerequisites){
            if (graph.has(v)) {graph.get(v).push(e)}
            else{graph.set(v,[e])}
            indegree[e]++
        }
    }
    
    function bfs(graph, indegree){
        let res=[]
        let queue=[]
        for (let i=0;i<indegree.length;i++){
            if (indegree[i]==0){
                queue.push(i)
            }}
            while (queue.length>0){
                let cur=queue.shift()
                res.push(cur)
                if (graph.has(cur)){
                    for (let neighbor of graph.get(cur)){
                        indegree[neighbor]--
                        if (indegree[neighbor]==0)
                            queue.push(neighbor)
                        
                    }
                    
                }
            }
           
        return res.length===numCourses?res:[]
    }
}
