/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
 var canAttendMeetings = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0])
    
    const n=intervals.length
    
    for(let i=0;i<n-1;i++){
        if (intervals[i+1][0]<intervals[i][1]) return false //后一个会议已经开始，而前一个会议还没结束
    }
    return true 
};