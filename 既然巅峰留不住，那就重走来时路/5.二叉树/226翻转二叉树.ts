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
// 226. 翻转二叉树
function invertTree(root: TreeNode | null): TreeNode | null {
    if (root === null) return null;
    const left = invertTree(root.left);
    const right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;
};

// 写递归的时候，如果要递归自身，你就把invertTree当成黑盒，你就假设它就是能完成翻转的功能
// 就假设这是一个三个节点的树，你写这个函数就是写给一个三个节点的树用的