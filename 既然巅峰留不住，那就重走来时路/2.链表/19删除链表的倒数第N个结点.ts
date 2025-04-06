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
// 19. 删除链表的倒数第N个结点
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummyNode = new ListNode(0); // 处理头节点被删除的情况
    dummyNode.next = head;

    let fast = dummyNode;
    let slow = dummyNode;

    for (let i = 0; i < n; i++) {
        fast = fast.next; // 先让fast指针向前移动n步，这样fast和slow之间就间隔了n个节点
    }

    while (fast && fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    // 此时slow指向的就是要删除节点的前一个节点
    // 删除slow.next节点
    slow.next = slow.next.next;

    return dummyNode.next;
};