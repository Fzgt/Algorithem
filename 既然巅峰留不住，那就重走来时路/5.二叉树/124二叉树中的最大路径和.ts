// 124. 二叉树中的最大路径和
function maxPathSum(root: TreeNode | null): number {
    let maxSum = -Infinity;

    const dfs = (root) => {
        if (!root) return 0;

        const left = dfs(root.left);   // 左子树提供的最大路径和
        const right = dfs(root.right); // 右子树提供的最大路径和

        const innerMaxSum = left + root.val + right; // 当前子树内部的最大路径和
        maxSum = Math.max(maxSum, innerMaxSum);      // 每个子树都要更新一下最大路径和

        const outputMaxSum = root.val + Math.max(0, left, right); // 当前子树对外提供的最大和

        // 如果对外提供的路径和为负，直接返回0。否则正常返回
        return outputMaxSum < 0 ? 0 : outputMaxSum;
    };

    dfs(root);

    return maxSum;
};