/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
 var updateBoard = function(board, click) {

    const m=board.length
    const n=board[0].length

    const dx = [1, 1, 1, -1, -1, -1, 0, 0];
    const dy = [1, 0, -1, 0, 1, -1, 1, -1];
    const inbound=(x,y)=>x>=0&&x<m&&y>=0&&y<n

    const update=(x,y)=>{
        if (!inbound(x,y)||board[x][y]!="E") return 
        let count=0

        for (let i=0;i<8;i++){
            const nx=x+dx[i]
            const ny=y+dy[i]
            if (inbound(nx,ny) && board[nx][ny]=="M"){
                count+=1
            }
        }
        if (count==0){
            board[x][y]="B"
            for (let i=0;i<8;i++){
                update(x+dx[i],y+dy[i])
            }
       } else{
                board[x][y]=count+''
            }
        }
        const [cx,cy]=click
        if (board[cx][cy]=="M"){
            board[cx][cy]="X"
        }
        else{
            update(cx,cy)
        }
        return board 
    }