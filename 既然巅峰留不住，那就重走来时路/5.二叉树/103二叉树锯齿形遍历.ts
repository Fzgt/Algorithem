/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
// 103. 二叉树的锯齿形层序遍历  BFS
function zigzagLevelOrder(root: TreeNode | null): number[][] {
    const res = [];

    if (!root) return res;

    const queue = [root];
    let flag = 1;

    while (queue.length !== 0) {
        const curLevelSize = queue.length;

        res.push([]);

        for (let i = 0; i < curLevelSize; i++) {

            const node = queue.shift();
            res[res.length - 1].push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        if (flag % 2 === 0) {
            const arr = res.pop().reverse();
            res.push(arr);
        }
        flag++;
    }

    return res;
};