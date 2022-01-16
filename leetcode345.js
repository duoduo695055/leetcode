/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {
    
    const n=s.length
    let left=0
    let right=n-1
    const arr=Array.from(s)
    
    while(left<right){
        
        while (left<n &&!isVowel(arr[left]) ){
            left++
        }
         while (right>0 &&!isVowel(arr[right]) ){
            right--
        }
        
        if(left<right){
            
            [arr[left],arr[right]]=[arr[right],arr[left]]
            left++
            right--
        }
    }
    return arr.join('')}
    
    
    
    function isVowel(array){
        
        return 'aeiouAEIOU'.indexOf(array)>=0
    }