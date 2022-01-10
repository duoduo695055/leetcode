/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    if(headA==null ||headB==null) return null
    
    let Pa=headA
    let Pb=headB
    
    while(Pa!==Pb){
        Pa=Pa===null?headB:Pa.next
        Pb=Pb===null?headA:Pb.next
    }
    return Pa
    
};