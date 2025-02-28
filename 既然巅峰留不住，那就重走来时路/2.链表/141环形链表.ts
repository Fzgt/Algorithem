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
// 141. 环形链表
function hasCycle(head: ListNode | null): boolean {
    if (head === null || head.next === null) {
        return false;
    }

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next !== null) {
        fast = fast.next.next;
        slow = slow!.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
};