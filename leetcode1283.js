/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
 var smallestDivisor = function(nums, threshold) {
    let left=1
    
    let right=Math.max(...nums)
    let res=0
    
    while (left<right){
        let mid=left+Math.floor((right-left)/2)
        let ans=0
        for(let i=0;i<nums.length;i++){
            ans+=Math.ceil(nums[i]/mid)
        }
        if (ans<=threshold){
            right=mid
        }
        else{
            left=mid+1
        }
        
    }
    
    return right
    
};