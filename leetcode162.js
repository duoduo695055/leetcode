/**
 * @param {number[]} nums
 * @return {number}
 */
 var findPeakElement = function(nums) {
    let left=0
    let right=nums.length-1
    
    while (left<right){
        let mid=left+((right-left)>>1)
        
        if(nums[mid]<nums[mid+1]){
            left=mid+1
        }
        else{
            right=mid
        }
    }
    return left
    
};

// 因为起点是负无穷，开始一定是上坡，目标是寻找序列中第一个下降点，序列从左到右是从“不满足”状态到“满足”状态的。如果nums[mid] < nums[mid+1]，说明仍然不满足，不必包含mid，继续向右找，即l = mid +1；如果nums[mid] > nums[mid+1]，说明此时这个mid位置满足了，但不一定是第一个满足的，所以要把mid包含在内，向左找，即r = mid；退出条件是l == r，也就是框出了唯一的一个位置，此时退出，返回l即可。这是一个很经典的二分框架～