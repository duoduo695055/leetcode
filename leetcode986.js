/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
 var intervalIntersection = function(firstList, secondList) {
    let res=[]
    
    let i=0
    let j=0
    
    while(i<firstList.length &&j<secondList.length){
        
        let left=Math.max(firstList[i][0],secondList[j][0]),right=Math.min(firstList[i][1],secondList[j][1])
        
        if(left<=right) res.push([left,right])
        
        firstList[i][1]<secondList[j][1]? i++:j++
        
    }
    return res
    
    
};