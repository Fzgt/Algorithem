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
// 23. 合并K个升序链表
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const nodes = lists.reduce((prev, cur) => {
        while (cur) {
            let temp = cur.next;
            cur.next = null;
            prev.push(cur);
            cur = temp;
        }
        return prev;
    }, []);

    if (nodes.length === 0) return null;
    nodes.sort((a, b) => a.val - b.val).reduce((prev, cur) => prev.next = cur);

    return nodes[0];
};