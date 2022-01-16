/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let s1= s.toLowerCase().match(/[a-z0-9]+/g);
    if (!s1) return true
    s2=s1.join('')
    
    
    let n=s2.length
    
    for(let i=0,j=n-1;i<j;i++,j--){
        
        if(s2[i]!=s2[j]) return false
    }
    return true 
    
};