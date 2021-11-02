/**
 * @param {number} n
 * @param {number[][]} preferences
 * @param {number[][]} pairs
 * @return {number}
 */
 var unhappyFriends = function(n, preferences, pairs) {
    const order=new Array(n).fill(0).map(()=>new Array(n).fill(0))
    
    for (let i=0;i<n; i++){
        for (let j=0;j<n-1; j++){
            order[i][preferences[i][j]]=j;
        }
    console.log(order) 
    }
    const match=new Array(n).fill(0)
    
    for (const pair of pairs){
        let person0=pair[0]
        let person1=pair[1]
        console.log(person0,person1)
        
        match[person0]=person1
        match[person1]=person0
        console.log(match)
    }
    
    
    let unhappy=0
    
    for(let x=0;x<n;x++){
        const y=match[x]
        const index=order[x][y];
        
        for (let i=0;i<index; i++){
        const u=preferences[x][i]
        const v=match[u]
        if (order[u][x]<order[u][v]){
            console.log(order[u][x],order[u][v])
            unhappy++
            break;
    }
    }
    }
    return unhappy;
};