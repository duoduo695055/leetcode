/**
 * @param {string[]} logs
 * @return {string[]}
 */
 var reorderLogFiles = function(logs) {
    
    let arr1=[]
    let arr2=[]
    
    for (const log of logs){
        //通过判断最后一个字符来判断这个log属于字母还是数字
        res=log[log.length-1].match(/\d/)
        if (res==null){
            arr1.push(log)
        }
        else{
            arr2.push(log)
        }
        arr1.sort()
        arr1.sort((x,y)=>{
                  return x.slice(x.indexOf(" "))<y.slice(y.indexOf(" "))?-1:1})}
    
    return arr1.concat(arr2)
    
};