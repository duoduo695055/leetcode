/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    
    const ans=[]
    

    for (let i=0;i<numRows;i++){
        const current=new Array(i+1).fill(1)
        for (let j=1;j<current.length-1;j++){
            current[j]=ans[i-1][j-1]+ans[i-1][j]
        }
        ans.push(current)
    }
    return ans 
    
};