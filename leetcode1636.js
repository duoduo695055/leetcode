/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var frequencySort = function(nums) {
    let map={}
    let res=[]
    
    for (let i of nums){
        if (map[i]){
            map[i]+=1
        }
        else{
            map[i]=1
        }
        
    }
    res=nums.sort(function(a,b){
                  if (map[a]==map[b]){
        return b-a
    }
    else{
        return map[a]-map[b]
    }})
                  
return res 
    
};