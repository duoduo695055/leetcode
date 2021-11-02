/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    const res=parseInt(s,10)
    
    if (isNaN(res)){
        return 0
    }
    if (res<Math.pow(-2,31) || res>Math.pow(2,31)-1){
        return res<Math.pow(-2,31)?Math.pow(-2,31):Math.pow(2,31)-1
    }
    return res

};