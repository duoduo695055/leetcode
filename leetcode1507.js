/**
 * @param {string} date
 * @return {string}
 */
 var reformatDate = function(date) {
    
    const m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let [day, month, year]=date.split(" ")
    
    month=('0'+(m.indexOf(month)+1)).slice(-2)
    day=('0'+day).slice(-4,-2)

    return `${year}-${month}-${day}`

    
};