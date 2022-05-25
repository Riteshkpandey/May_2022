/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if(!head) return null;
    let tail=head;
    for(let i=1;i<k;i++)
        {
            tail=tail.next;
            if(!tail) return head;
        }
    let next1=tail.next;
    tail.next=null;
    reverse(head);
    head.next=reverseKGroup(next1,k);
    return tail;
    
};

function reverse(curr)
{
    let prev=null;
    while(curr)
        {
            let temp=curr.next;
            curr.next=prev;
            prev=curr;
            curr=temp;
        }
    return prev;
}