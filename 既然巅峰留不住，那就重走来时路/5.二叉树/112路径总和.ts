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
// 112. 路径总和
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) return false;
    targetSum -= root.val;
    if (root.left === root.right) { // 判断是不是叶子结点（无子节点）
        return targetSum === 0;
    }
    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum); // 用的或，所以回来的所有结果只要有一个是true就是true
};