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
// 148. 排序链表
function sortList(head: ListNode | null): ListNode | null {
    if (!head) return null;

    let nodeArr: ListNode[] = [];

    while (head) {
        let temp = head.next;
        head.next = null;
        nodeArr.push(head);
        head = temp;
    }

    nodeArr.sort((a, b) => a.val - b.val).reduce((prev, cur) => prev.next = cur);
    return nodeArr[0];
};