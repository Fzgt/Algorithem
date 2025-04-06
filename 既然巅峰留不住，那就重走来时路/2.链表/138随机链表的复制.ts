/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 * 
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */
// 138. 随机链表的复制
function copyRandomList(head: _Node | null, cachedNode = new Map()): _Node | null {
    if (!head) return null;

    if (!cachedNode.has(head)) {
        cachedNode.set(head, { val: head.val });

        Object.assign(cachedNode.get(head), {
            next: copyRandomList(head.next, cachedNode),
            random: copyRandomList(head.random, cachedNode)
        })
    }

    return cachedNode.get(head);
};

// copyRandomList需要递归，每次传cachedNode为了共用一个Map