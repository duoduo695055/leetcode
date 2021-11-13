/**
 * @param {string[]} wordsDict
 */
 var WordDistance = function(wordsDict) {
    this.arr=wordsDict
};

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
    let i1=-1, i2=-1
    let res=Infinity
    
    for (let i=0;i<this.arr.length;i++){
        if (this.arr[i]==word1){
            i1=i
        }
        if (this.arr[i]==word2){
            i2=i
        }
        if (i1!=-1 && i2!=-1){
        res= Math.min(Math.abs(i1-i2),res)}
    }
    return res 
};