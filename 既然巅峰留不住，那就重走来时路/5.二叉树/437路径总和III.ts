// 437. 路径总和 III
function pathSum(root: TreeNode | null, targetSum: number): number {
    if (!root) return 0;

    let ans = rootSum(root, targetSum);
    ans += pathSum(root.left, targetSum);
    ans += pathSum(root.right, targetSum);
    return ans;
};

const rootSum = (root, targetSum): number => {
    let res = 0;

    if (!root) return 0;
    const val = root.val;
    if (val === targetSum) res++;

    res += rootSum(root.left, targetSum - val);
    res += rootSum(root.right, targetSum - val);
    return res;
}

// 外层递归 pathSum 函数：遍历每个节点，将每个节点作为潜在路径的起点
// 内层递归 rootSum 函数：以给定节点为起点，寻找满足条件的路径