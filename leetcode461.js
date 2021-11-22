/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var hammingDistance = function(x, y) {
    let s=x^y
    
    let ans=0
    
    while(s!=0){
        ans+=s&1  // 两个数都为1的时候 结果才是1
        s>>=1 //S 向右边移动一位，原本的倒数第二位变成倒数第一位
    }
    return ans
    
};