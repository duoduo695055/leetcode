/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
    res=sort(nums).reverse()[k-1]
    return res}
    
    function sort(nums){
       quick(nums,0,nums.length-1)
       return nums
    }
    
    
    function quick(nums,left,right){
        let index=0
        
        if(nums.length>1){
            index=parition(nums,left,right)
            left<index-1&&quick(nums,left,index-1)
            right>index &&quick(nums,index,right)
        }
    }
    
   
    function parition(nums,left,right){
        let mid=nums[(left+right)>>1]
        while (left<=right){
            while(nums[left]<mid){
                left++
            }
            while(nums[right]>mid){
                right--
                }
            
            if(left<=right){
                [nums[left],nums[right]]=[nums[right],nums[left]]
                left++
                right--
            }
            
        }
    return left
    }
    