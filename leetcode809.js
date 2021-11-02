/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
 var expressiveWords = function(s, words) {
    let ans=0
    for (const w of words){
       if (check(s,w)){
           ans+=1
       }
    }
    return ans
    
};
    function check(s,w){
        let i=s.length-1;
        let j=w.length-1;
        
        while(i>=0 && j>=0){
            if (s[i]!=w[j])return false
            let k=i,const1=0
            
            while (s[k]===s[i]){
                const1+=1
                i--
            }
            let h=j,const2=0
            
            while (w[j]===w[h]){
                const2+=1
                j--
            }
            if (const2>const1){
                return false 
            }
            if (const1==2 &&const2==1){
                return false 
            }
        }
        return i===j
    }