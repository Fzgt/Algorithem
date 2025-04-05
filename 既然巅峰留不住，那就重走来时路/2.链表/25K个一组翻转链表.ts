function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    const preHead = new ListNode(0); // 方便找头节点，因为反转后头节点会变
    preHead.next = head;
    let pre = preHead; // 待翻转子链表的前一个节点

    while (head) {
        let tail = pre;
        for (let i = 0; i < k; i++) {
            tail = tail.next;
            if (!tail) {
                return preHead.next; // 不足k个，直接返回,不用翻转
            }
        }

        const nex = tail.next; // 记录下一组的头节点
        const newHead = myReverse(head, tail); // 翻转后的头节点

        // 连接翻转后的子链表
        pre.next = newHead;
        head.next = nex;
        // 更新pre和head
        pre = head;
        head = nex;
    }

    return preHead.next;
};

const myReverse = (head, tail) => {
    let [prev, cur] = [null, head];
    const end = tail.next;
    while (cur !== end) {
        let temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }

    return prev;
}