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
    let curr=head;
    for(let i=1;i<k;i++)
        {
            curr=curr.next;
            if(!curr) return head;
        }
    let nextAfterK=curr.next;
    curr.next=null;
    reverseKElements(head);
    head.next=reverseKGroup(nextAfterK,k);
    
    return curr;
};


function reverseKElements(head)
{
    let prev=null;
    while(head)
        {
            let temp=head.next;
            head.next=prev;
            prev=head;
            head=temp;
        }
    
    return prev;
    
    
}
