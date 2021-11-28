/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    
    const n=nums.length
    
    let left=0
    let right=n-1
    
    
    while(left<=right){
        let mid=left+Math.floor((right-left)/2)
        if (nums[mid]<target){
            left=mid+1
        }
        else{right=mid-1}
    }
    return left
    
};