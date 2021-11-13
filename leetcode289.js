/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var gameOfLife = function(board) {
    const idx=[-1,1,0,0,1,-1,1,-1]
    const idy=[0,0,1,-1,1,-1,-1,1]
    
    const copyboard=board.map(array=>{
                             return [...array]})
    
    for (let i=0;i<copyboard.length;i++){
        for (let j=0;j<copyboard[i].length;j++){
            let live=0
            
            for(let x=0;x<8;x++){
                    let newx=i+idx[x]
                    let newy=j+idy[x]
                if (newx<0||newy<0||newx>=copyboard.length||newy>=copyboard[i].length) continue
                    
                live+=copyboard[newx][newy]?1:0
                }
            if (live <2 ||live>3){
                board[i][j]=0
            }
            else if (live <=3 && copyboard[i][j]){
                board[i][j]=1
            }
             else if (live ===3 && !copyboard[i][j]){
                board[i][j]=1
            }
        }
    }
}