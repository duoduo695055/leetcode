/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
 var killProcess = function(pid, ppid, kill) {
    
    let res=[]
    let queue=[]
    queue.push(kill)
    
    while (queue.length){
        let cur=queue.shift()
        res.push(cur)
        for (let i=0; i<ppid.length;i++){
            if (ppid[i]==cur)[
                queue.push(pid[i]) //子节点可能还有他自己的子节点，所以先放到队列中
            ]
        }
    }
    return res
    
};