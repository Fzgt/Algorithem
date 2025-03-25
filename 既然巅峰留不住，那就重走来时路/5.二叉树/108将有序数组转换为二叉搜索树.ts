// 108. 将有序数组转换为二叉搜索树
function sortedArrayToBST(nums: number[]): TreeNode | null {
    const dfs = (left, right) => {
        if (left === right) return null;
        const midIdx = Math.floor((left + right) / 2);
        return new TreeNode(nums[midIdx], dfs(left, midIdx), dfs(midIdx + 1, right));
    }
    return dfs(0, nums.length);
};