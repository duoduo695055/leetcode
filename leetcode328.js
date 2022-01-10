/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var oddEvenList = function(head) {
    if(head==null) return head
     
    let odd=head
    let even=head.next
    let evenHead=head.next //这里保存是为了后面奇数链表和偶数链表的链接用
   
    while(even!=null && even.next!=null){
        odd.next=even.next 
        odd=odd.next 
        even.next=odd.next 
        even=even.next  
    }
    odd.next=evenHead 
    return head
     
 };