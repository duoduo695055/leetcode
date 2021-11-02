/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    
    if (!needle && !haystack){
        return 0
    }
    let found=haystack.includes(needle)
    if (found){
        return haystack.indexOf(needle)
        console.log(haystack.indexOf('he'))
    }
    return -1
    
};