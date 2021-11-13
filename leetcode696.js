/**
 * @param {string} s
 * @return {number}
 */
 var countBinarySubstrings = function(s) {
    let ptr=0,ans=0,n=s.length,last=0
    
    while(ptr<n){
        const i=s.charAt(ptr)
        let count=0
        while(ptr<n && s.charAt(ptr)===i){
            count+=1
            ptr+=1
        }
        ans+=Math.min(count,last)
        last=count
    }
    return ans
    
};

