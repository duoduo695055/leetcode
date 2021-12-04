/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, newColor) {
    let height=image.length
    let width=image[0].length
    
    let oldColor=image[sr][sc]
    
    if(oldColor==newColor)return image
    
    let dfs=(i,j)=>{
        if (i<0 ||j<0 || i>=height||j>=width || image[i][j]!=oldColor) return 
   
    image[i][j]=newColor
    dfs(i-1,j)
    dfs(i+1,j)
    dfs(i,j+1)
    dfs(i,j-1)}
    dfs(sr,sc)
    return image
    
    
    
};