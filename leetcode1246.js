/**
 * @param {string} s
 * @return {string}
 */
 var minRemoveToMakeValid = function(s) {
    //很重要的一点是stack里存储的左右括号的索引，而不是左右括号
    const stack=[]
    const res=s.split('')
    
    for (let i=0;i<res.length;i++){
        if (res[i]=="("){
            stack.push(i)
        }
        
        if (res[i]==")"){
            if (stack.length>0){
            stack.pop()
        }
            else
                res[i]=''}
            
    }
    if (stack.length>0){
        for (let j=0;j<stack.length;j++){
            //这里剩下的是所有落单的左括号，所以要把所有落单的左括号的索引都找出来【不一定连续】，然后逐一删除
            res[stack[j]]=""
        }
    }
    return res.join("")
};