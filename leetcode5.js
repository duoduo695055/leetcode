var longestPalindrome = function(s) {
    let n=s.length
    let resLeft=0
    let resRight=0
    let i=0
    let max_len=0
    
    while(i<n){
        let left=i-1
        while(left>=0 && s[i]==s[left]){
            left--
        }
        
        let right=i+1
        
        while(right<n && s[i]==s[right]){
            right++
        }
        const end=right
        
        while(left>=0 && right<n && s[left]==s[right]){
            left--
            right++
        }
        
        if(max_len<right-left-1){
            
            max_len=right-left-1
            resLeft=left+1
            resRight=right-1
        }
        i=end
    }
    
    return s.substring(resLeft,resRight+1)
    
    
    
    
};
