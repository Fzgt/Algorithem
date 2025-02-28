/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
// 86. 分隔链表
function partition(head: ListNode | null, x: number): ListNode | null {
    let smallHead = new ListNode(-1);
    let largeHead = new ListNode(-1);
    let small = smallHead;
    let large = largeHead;
    while (head) {
        if (head.val < x) {
            small.next = head;
            small = small.next;
        } else {
            large.next = head;
            large = large.next;
        }
        head = head.next;
    }
    large.next = null; //避免链表成环
    small.next = largeHead.next;
    return smallHead.next;
};