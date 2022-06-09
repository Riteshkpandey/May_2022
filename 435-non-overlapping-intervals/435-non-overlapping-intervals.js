/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b)=> a[1]-b[1]);
    let count=0,prev=intervals[0];
    for(let i=1;i<intervals.length;i++)
        {
            if(intervals[i][0]<prev[1]) count+=1;
            else
                prev=intervals[i];
        }
    return count;
    
};