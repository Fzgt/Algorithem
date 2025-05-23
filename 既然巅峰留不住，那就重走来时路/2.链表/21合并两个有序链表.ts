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
// 21. 合并两个有序链表
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const preHead = new ListNode(-1);
    let [l1, l2] = [list1, list2];

    let prev = preHead;
    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            prev.next = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next;
    }
    prev.next = l1 === null && l2 || l1;
    // prev.next = l1 === null ? l2 : l1;

    return preHead.next;
};


// var mergeTwoLists = function (l1, l2) {
//     if (l1 === null) return l2
//     if (l2 === null) return l1
//     if (l1.val < l2.val) {
//         l1.next = mergeTwoLists(l1.next, l2)
//         return l1
//     } else {
//         l2.next = mergeTwoLists(l2.next, l1)
//         return l2
//     }
// };