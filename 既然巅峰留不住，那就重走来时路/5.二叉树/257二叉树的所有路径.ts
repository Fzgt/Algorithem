// 257. 二叉树的所有路径
function binaryTreePaths(root: TreeNode | null): string[] {
    const ans = [];

    const dfs = (root, path) => {
        if (root === null) return;

        if (root.left === null && root.right === null) {
            path += root.val;
            ans.push(path);
            return;
        }

        path += root.val + '->';
        dfs(root.left, path);
        dfs(root.right, path);
    }

    dfs(root, '');
    return ans;
};