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
// 206. 反转链表
function reverseList(head: ListNode | null): ListNode | null {
    let [prev, cur] = [null, head];
    while (cur) {
        let temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }
    return prev;
};