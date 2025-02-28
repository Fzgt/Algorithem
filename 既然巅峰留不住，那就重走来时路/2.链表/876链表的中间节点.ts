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
// 876. 链表的中间结点
function middleNode(head: ListNode | null): ListNode | null {
    if (!head) return null;
    let len = 0;
    let cur = head;
    while (cur) {
        cur = cur.next;
        len++;
    }
    const mid = Math.floor(len / 2);
    let ans = head;
    for (let i = 0; i < mid; i++) {
        ans = ans.next;
    }
    return ans;
};