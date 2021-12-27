/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    let m=matrix.length
    let n=matrix[0].length
    
    let left=0
    let right=m*n-1
    
    while (left<=right){
        let mid=left+Math.floor((right-left)/2)
        const x= matrix[Math.floor((mid/n))][mid%n]
        
        if(x>target){
            right=mid-1
        }
        else if(x<target){
            left=mid+1}
        else if(x==target){
            return true
        }
        
    }
    return false
    
};