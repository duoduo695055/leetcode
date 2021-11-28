/**
 * @param {number[][]} moves
 * @return {string}
 */
 var tictactoe = function(moves) {
    let result=Array.from({length:9},v=>"")
    let line=[[0,3,6],[1,4,7],[2,5,8],[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6]]
    
    for (let i=0;i<moves.length;i++){
        if (i%2==0){
            result[moves[i][0]*3+moves[i][1]]="A"
        }
        else{
            result[moves[i][0]*3+moves[i][1]]="B"
        }
    }
    
    for (let each of line){
        let [a,b,c]=each
        if (result[a] && result[a] ==result[b] && result[b]==result[c]){
            return result[a]
        }
        
    }
    return moves.length==9?"Draw": "Pending"
};