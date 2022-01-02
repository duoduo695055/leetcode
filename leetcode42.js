/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    let ans=0
    
    let left=0
    let right=height.length-1
    
    let left_max=0, right_max=0
    
    while(left<right){
       left_max=Math.max(left_max, height[left])
       right_max=Math.max(right_max,height[right])
        
       if(height[left]<height[right]){
           ans+=left_max-height[left]
           left++
       }
       else{
           ans+=right_max-height[right]
           right--
       }
    }
    return ans 
    
};