/**
 * @param {number[]} nums
 * @return {number}
 */
 var minStartValue = function(nums) {
    let n=nums.length
    let before=new Array(n+1)
    before[0]=0
    
    for (let i=0;i<n;i++){
        before[i+1]=before[i]+nums[i]
    }
    let sub=before.slice(1)
    
    sub.sort((a,b)=>a-b)
    
    if (sub[0]>0){
        return 1
    }
    return 1-sub[0]
    
};