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
// 61. 旋转链表
function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (head === null || head.next === null || k === 0) {
        return head;
    }

    let len = 1;
    let tail: ListNode | null = head;
    while (tail.next !== null) {
        tail = tail.next;
        len++;
    }

    // 如果旋转次数是链表长度的整数倍，不用旋转
    k = k % len;
    if (k === 0) {
        return head;
    }

    // 找到需要切断链表位置的前一个节点
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    for (let i = 0; i < k; i++) {
        fast = fast!.next;
    }
    while (fast!.next !== null) {
        slow = slow!.next;
        fast = fast!.next;
    }

    const newHead = slow!.next; // 切掉部分的第一个节点就是新头部
    slow!.next = null; // 断开链表
    tail.next = head; // 尾巴拼接到原头部

    return newHead;
};