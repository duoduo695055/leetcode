/**
 * @param {string} s
 * @return {number}
 */
 var calculate = function(s) {
    s=s.trim()
    
    const stack=new Array()
    let n=s.length
    let presign='+'
    let num=0
    
    for (let i=0;i<n;i++){
        if (!isNaN(Number(s[i]))&&s[i]!==' '){
            num=10*num+s[i].charCodeAt()-'0'.charCodeAt()
        }
        if (isNaN(Number(s[i]))||i===n-1){
            switch (presign){
            case '+':
                stack.push(num)
                break
           case '-':
                stack.push(-num)
                break
           case '*':
                stack.push(stack.pop()*num)
                break
            default:
                stack.push(stack.pop()/num|0)
            }
        presign=s[i]
        num=0
    }}
          
    let ans=0
    while(stack.length){
        ans+=stack.pop()
        
    }
    return ans
};