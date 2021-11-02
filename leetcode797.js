/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
 var allPathsSourceTarget = function(graph) {
    const stack=[]
    ans=[]
    
   var dfs=(x,n,graph) =>{
        if (x===n){
            ans.push(stack.slice())
            return 
        }
        for (const y of graph[x]){
            stack.push(y)
            dfs(y,n,graph)
            stack.pop()
        }
    }
    stack.push(0)
    dfs(0,graph.length-1,graph)
    return ans
};
//https://segmentfault.com/a/1190000016496022