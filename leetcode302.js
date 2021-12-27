/**
 * @param {character[][]} image
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var minArea = function(image, x, y) {
    
    let top=x, bottom=x
    let left=y,right=y
    
    for (let x=0;x<image.length;x++){
        for (let y=0;y<image[0].length;y++){
            if(image[x][y]=='1'){
                top=Math.min(top,x)
                bottom=Math.max(bottom,x+1)
                left=Math.min(left,y)
                right=Math.max(right,y+1)
            }
        }
        
        
    }
    return (right-left)*(bottom-top)
};