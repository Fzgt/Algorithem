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
// 92. 反转链表 II
function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    const dummyNode = new ListNode(-1);
    dummyNode.next = head;

    let prev = dummyNode;

    for (let i = 0; i < left - 1; i++) {
        prev = prev.next;
    }

    let rightNode = prev;
    for (let i = 0; i < right - left + 1; i++) {
        rightNode = rightNode.next;
    }

    let leftNode = prev.next;
    let nodeAfterRightNode = rightNode.next;

    prev.next = null;
    rightNode.next = null;

    reverseLinkedList(leftNode);

    prev.next = rightNode;
    leftNode.next = nodeAfterRightNode;
    return dummyNode.next;

};

const reverseLinkedList = head => {
    let [prev, cur] = [null, head];
    while (cur) {
        let temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }
}