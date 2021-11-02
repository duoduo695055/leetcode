/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} s
 * @return {string}
 */
 var originalDigits = function(s) {
    const ans=[]
    const record = [
        ['z', 0, 'zero'],
        ['w', 2, 'two'],
        ['u', 4, 'four'],
        ['g', 8, 'eight'],
        ['h', 3, 'three'],
        ['o', 1, 'one'],
        ['f', 5, 'five'],
        ['x', 6, 'six'],
        ['s', 7, 'seven'],
        ['n', 9, 'nine'],
    ]
    
    const map={}
    
    for (let i=0;i<s.length;i++){
        const char=s[i]
        map[char]=(map[char] ||0)+1
    }
    
    for (const [key,number, word] of record){
        while (map[key]){
            ans.push(number)
            for (const char of word.split('')){
                map[char] --
            }
        }
    }
    return ans.sort((a,b)=>a-b).join('')
   
};