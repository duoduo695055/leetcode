/**
 * @param {number[]} nums
 * @return {number}
 */
 var findShortestSubArray = function(nums) {
    let map={}
    
    for (let i=0;i<nums.length;i++){
        let value=nums[i]
        if(!map[value]){
            map[value]=[1,i,i]
        }
        else{
            map[value][0]+=1
            map[value][2]=i
        }
    }
    
    let max=0
    for (let key in map){
        max=Math.max(max,map[key][0])
    }
    
    let min=nums.length
    for(let key in map){
        if (map[key][0]==max){
            min=Math.min(min,map[key][2]-map[key][1]+1)
        }
    }
    return min
};