/**
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {
    let ans=0
    for (let i=0;i<nums.length;i++){
        for (let j=i+1;j<nums.length;j++){
            if(nums[i]==nums[j]){
                ans+=1
            }
        }
    }
    //这道题就是每个nums[i]去找nums[i+1]到nums[n]中，跟nums[i]相等的值。就是这么个意思。
    return ans
};