/**
 * @param {string} s
 * @return {boolean}
 */
 var validPalindrome = function(s) {
    let left=0
    let right=s.length-1 
    
    while(left<right){
        
        if(s[left]!=s[right]){
            return isPalindrome(left+1,right,s) || isPalindrome(left,right-1,s)
    }
    left++
    right--}
    return true
    
};

var isPalindrome=function(l,r,s) {
    
    while(l<r){
        if(s[l]!=s[r]){
            return false
        }
        l++;
        r--;
    }
    return true
}