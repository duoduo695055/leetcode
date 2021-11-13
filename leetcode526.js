var countArrangement = function(n) {
    let ans = 0;

    let visit = new Array(n + 1).fill(0) // 值是否用过， 就是i的值是否用过
    function dfs(x){  // x 就是 arr的索引
        if(x > n){    //当索引大于n，说明遍历完了
            ans++;
            return 
        }
        for(let i = 1; i <= n; i++){
            if(visit[i] == 0){
                if(x % i == 0 || i % x == 0){   // 优美的条件
                    visit[i] = 1;               // i值用过
                    dfs(x + 1)   
                    visit[i] = 0;               // 恢复保存前的状态
                }
            }
        }
    }

    

    dfs(1);

    return ans;
};

