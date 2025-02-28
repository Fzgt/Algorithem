/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    // let [prev, cur] = [null, head];
    // while (cur) {
    //     let temp = cur.next;
    //     cur.next = prev;
    //     prev = cur;
    //     cur = temp;
    // }
    // return prev;

    let [prev, cur] = [null, head];
    while (cur) {
        let temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }
    return prev;
};

