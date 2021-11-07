/**
 * @param {number[][]} costs
 * @return {number}
 */
 var twoCitySchedCost = function(costs) {
    //先排序，找到那些去b城市更花钱的人，找到这样的前N个人，让他们飞去a
    costs.sort((a,b)=>(b[1]-b[0])-(a[1]-a[0]))
    
    const n= costs.length/2
    let sum=0

    for(let index=0;index<costs.length;index++){
    if (index<n){
        sum+=costs[index][0]
    }
    else
        {
            sum+=costs[index][1]
        }}
    return sum
    
    
};