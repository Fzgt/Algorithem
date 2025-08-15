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
// 104. 二叉树的最大深度
function maxDepth(root: TreeNode | null): number {
    if (!root) {
        return 0;
    } else {
        const left = maxDepth(root.left);
        const right = maxDepth(root.right);
        return Math.max(left, right) + 1; //每次递归都下一层，所以加1
    }
};

// 树里的递归：
// 返回条件一般都是root === null （root就理解为当前节点）
// 然后递归内容 一般都是去取 left 和 right，然后return就是对这两个值进行某种操作
