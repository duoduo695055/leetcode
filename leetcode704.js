/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let map={}
    
    for (let i=0;i<nums.length;i++){
        map[i]=nums[i]
        if (map[i]==target){
            return i
        }
    }
    return -1
    
};