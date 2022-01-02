/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    nums1.sort((a,b)=>a-b)
    nums2.sort((a,b)=>a-b)
    
    index1=0
    index2=0
    
    const intersection=[]
    let m=nums1.length
    let n=nums2.length
    
    while(index1<m && index2<n){
        a=nums1[index1]
        b=nums2[index2]
        
        if(a==b){
            if(!intersection.length ||a!=intersection[intersection.length-1]){
                intersection.push(a)
            }
        index1++
        index2++}
        else if(a<b){
            index1++
        }
        else{
            index2++
        }
    }
    return intersection 
    
};