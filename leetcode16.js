var threeSumClosest = function(nums, target) {
    
    if (nums.length==3){
        sum=nums[0]+nums[1]+nums[2]
        return sum
    }
    nums=nums.sort((a,b)=>a-b)
    let min=Infinity
    let res=0
    
    
    for (let i=0;i<nums.length-2;i++){
       let  basic=i
       let left=i+1
       let right=nums.length-1
       
       while (left<right){
       let sum=nums[basic]+nums[left]+nums[right]
    
       let diff=Math.abs(sum-target)
        
       if (diff<min){
           min=diff
           res=sum
       }
    
       if (sum<target){
           left++
        }
        else{
            right--
        }}}
       return res
    
    
    
};
