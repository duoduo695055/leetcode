/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    
    let p=head
    let res=[]
    
    while(p!==null){
        res.push(p.val)
        p=p.next
    }
    n=res.length
    
    for(let i=0,j=n-1;i<j;i++,j--){
        if(res[i]!=res[j]) return false
    }
    return true
    
};