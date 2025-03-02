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
// 145. 二叉树的后序遍历
function postorderTraversal(root: TreeNode | null): number[] {
    const ans: number[] = [];

    const postorder = (root: TreeNode | null) => {
        if (!root) return;
        postorder(root.left);
        postorder(root.right);
        ans.push(root.val);
    }

    postorder(root);
    return ans;
};