// 543. 二叉树的直径
function diameterOfBinaryTree(root: TreeNode | null): number {
    let ans = 0; // Track the maximum diameter
    
    const dfs = root => {
        if (!root) return 0;
        
        // Get depths of left and right subtrees
        const left = dfs(root.left);
        const right = dfs(root.right);
        
        // Update the maximum diameter
        ans = Math.max(ans, left + right); // 这里不加1是因为 diameter是边的数量
        
        // Return the maximum depth of this subtree
        return Math.max(left, right) + 1; // 这里加1是因为要返回当前节点的深度
    }
    
    dfs(root);
    return ans;
};