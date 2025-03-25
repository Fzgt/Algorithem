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
// 110. 平衡二叉树
function isBalanced(root: TreeNode | null): boolean {
    const getH = node => {
        if (!node) return 0;
        const leftH = getH(node.left);
        if (leftH === -1) return -1;
        const rightH = getH(node.right);
        if (rightH === -1 || Math.abs(leftH - rightH) > 1) return -1;
        return Math.max(leftH, rightH) + 1;
    }

    return getH(root) !== -1;
};