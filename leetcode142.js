var detectCycle = function(head) {
    
    if(head==null) return null
    
    let fast=head,slow=head
    
    while(fast!==null){
        slow=slow.next
        if(fast.next!==null){
            fast=fast.next.next
        }
        else{
            return null
        } //说明遍历结束了，还没有出现fast和slow的重合，那就说明这个链表是没有环的
        
        if(fast===slow){//确定有环的情况下，找环的入口在哪里
            let fast=head
        while(fast!=slow){
            fast=fast.next
            slow=slow.next}
        return fast} //这题的难点是在于要找入环的节点，而不是当fast和slow重合的时候，直接返回fast或者slow
        
    }
    return null
    
};