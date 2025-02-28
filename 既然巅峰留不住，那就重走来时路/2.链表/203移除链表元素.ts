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
// 203. 移除链表元素
function removeElements(head: ListNode | null, val: number): ListNode | null {
    let dummyNode = new ListNode(-1);
    dummyNode.next = head;
    let prev = dummyNode;
    while (prev.next) {
        if (prev.next.val === val) {
            prev.next = prev.next.next;
        } else {
            prev = prev.next;
        }
    }
    return dummyNode.next;
};