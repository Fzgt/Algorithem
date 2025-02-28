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
// 160. 相交链表
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    const visited = new Set();
    let cur = headA;
    while (cur) {
        visited.add(cur);
        cur = cur.next;
    }
    cur = headB;
    while (cur) {
        if (visited.has(cur)) {
            return cur;
        }
        cur = cur.next;
    }
    return null;
};