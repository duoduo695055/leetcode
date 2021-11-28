var nextGreaterElement = function(nums1, nums2) {
    const stack=[]
    map=new Map()
    
    for (const num of nums2){
        while (stack.length>0 && stack[stack.length-1]<num){
            const small=stack.pop()
            map.set(small,num)
        }
        stack.push(num)
    }
    
    let ans=[]
    for (const num1 of nums1){
        if (map.has(num1)){
            ans.push(map.get(num1))
        }
        else{
            ans.push(-1)
        }
    }
    return ans
};