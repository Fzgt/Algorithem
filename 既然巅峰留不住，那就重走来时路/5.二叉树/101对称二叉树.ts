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
// 101. 对称二叉树
function isSymmetric(root: TreeNode | null): boolean {
    return check(root.left, root.right);
};

const check = (l: TreeNode | null, r: TreeNode | null): boolean => {
    if (!l && !r) return true; // 这是终止条件，如果两侧都没有节点，说明是对称的
    if (!l || !r) return false; // 如果一侧有节点而另一侧没有，说明不对称

    // 如果两侧都有节点，比较它们的值，并递归检查它们的子节点
    // 注意这里是 l.left 和 r.right 以及 l.right 和 r.left
    // 这就是对称的检查
    return l.val === r.val && check(l.left, r.right) && check(l.right, r.left);
}