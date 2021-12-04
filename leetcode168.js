/**
 * @param {number} columnNumber
 * @return {string}
 */
 var convertToTitle = function(columnNumber) {
    const numberToLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (columnNumber==0) return ''
    return convertToTitle(Math.floor((columnNumber-1)/26))+numberToLetter[(columnNumber-1)%26]
    
};