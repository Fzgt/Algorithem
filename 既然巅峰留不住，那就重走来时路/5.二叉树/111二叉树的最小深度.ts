// 111. 二叉树的最小深度
function minDepth(root: TreeNode | null): number {
    if (!root) return 0;

    if (root.left && root.right) {
        return 1 + Math.min(minDepth(root.left), minDepth(root.right));
    } else if (root.left) {
        return 1 + minDepth(root.left);
    } else if (root.right) {
        return 1 + minDepth(root.right);
    } else {
        return 1;
    }
};