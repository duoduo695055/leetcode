/**
 * @param {number[]} arr
 * @return {number}
 */
 var longestMountain = function(arr) {
    let i=1
    
    let res=0
    
    while(i<arr.length){
        let increasing=0
        let decreasing=0
        
        while(i<arr.length && arr[i-1]<arr[i]){increasing++,i++}
        while(i<arr.length && arr[i-1]>arr[i]){decreasing++,i++}
        
        if(increasing>0 && decreasing>0)
        
        {res=Math.max(res,increasing+decreasing+1)}
        
        while(i<arr.length && arr[i-1]==arr[i]){i++}
    }
    return res
    
};