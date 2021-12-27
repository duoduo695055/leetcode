/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
 var search = function(nums, target) {
    if (!nums.length) return false
    let left=0
    let right=nums.length-1
    
   
    while (left<=right){
        let mid=left+((right-left)>>1)
        if (nums[mid]===
            target) return true
        if(nums[mid]===nums[left]){
            left++
            continue
        }
    if (nums[mid]>=nums[left]){
       if (nums[mid]>target && nums[left]<=target){
           right=mid-1
       }
       else
           left=mid+1
        
    
    }
    //如果右区间是升序序列
    else if(nums[mid]<nums[left]){
        
       if (nums[mid]<target&&nums[right]>=target){
           left=mid+1
       }
       else 
       {right=mid-1}
    }}
    return false
    
};