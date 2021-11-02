/**
 * @param {string} homepage
 */
 var BrowserHistory = function(homepage) {
    this.cur=[homepage];
    this.next=[]
    
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.cur.push(url);
    this.next=[];
    
    return this.cur[this.cur.length-1];
    
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    for (let i=0;i<steps;i++){
        if (this.cur.length>1){
            let url=this.cur.pop();
            this.next.push(url);
        }
      
    }
      return this.cur[this.cur.length-1];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    for (let i=0;i<steps;i++){
        if (this.next.length){
            let url=this.next.pop();
            this.cur.push(url)
        }
    
    }
      return this.cur[this.cur.length-1];
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */