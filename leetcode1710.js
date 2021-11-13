/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a,b)=>b[1]-a[1])
    let res=0
    let count=0
    
    for (let i=0;i<boxTypes.length;i++){
        if (count+boxTypes[i][0]<truckSize){
            count+=boxTypes[i][0]
            res+=boxTypes[i][0]*boxTypes[i][1]
            
        }
        else{
            res+=(truckSize-count)*boxTypes[i][1]
            return res
        }
        
    }
return res}