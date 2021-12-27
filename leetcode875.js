/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
 var minEatingSpeed = function(piles, h) {
    
    let left=1 //k最小从1开始
    let right=Math.max(...piles)
    
    while(left<right){
        let mid=left+Math.floor((right-left)/2)
        if (canFinish(piles,mid,h)){
            right=mid
        }
        else{
            left=mid+1
        }
    
    }
    return left}
    
    
    var canFinish=function(piles,k,h){
        
        let total_time=0
        
        for (let i=0;i<piles.length;i++){
            if (piles[i]<=k){
                total_time+=1
            }
            else{
                total_time+=Math.ceil(piles[i]/k)
            }
        }
        if(total_time>h) return false
    return true}