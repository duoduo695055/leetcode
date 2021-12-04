/**
 * @param {number} size
 */
 var MovingAverage = function(size) {
    this.queue=[]
    this.size=size
    this.sum=0
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.queue.push(val)
    this.sum+=val
    if(this.size<this.queue.length){
       const K= this.queue.shift()
       this.sum-=K
        
    }
 
    return this.sum/this.queue.length //注意题目里的size是一直在变的，所以要用queue的长度而不是size
    
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */