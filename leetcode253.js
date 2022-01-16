/**
 * @param {number[][]} intervals
 * @return {number}
 */



 var minMeetingRooms = function(intervals) {
    
    let s=[]
    let e=[]
    
    let l=0;r=0 
    let n=0
    
    intervals.forEach(v=>(s.push(v[0]),e.push(v[1])))
    
    s.sort((a,b)=>a-b)
    e.sort((a,b)=>a-b)
    
    while(l<s.length){
       if (e[r]>s[l]){
           n++
       }
       else{
           r++
       }
       l++
    }
    return n
    
};