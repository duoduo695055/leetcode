/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    n=digits.length
    
    for (i=n-1;i>=0;i--){
        if (digits[i]!==9){
            digits[i]=digits[i]+1
            for(j=i+1;j<n;j++){
                digits[j]=0
        }
        return digits}
    }
    const ans=new Array(n+1).fill(0)
    
    ans[0]=1
    return ans 
};