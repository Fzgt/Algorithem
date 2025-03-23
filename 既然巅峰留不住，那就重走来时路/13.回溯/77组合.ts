// 77. 组合
function combine(n: number, k: number): number[][] {
    const ans = [];
    const path = []; // 存储当前路径，即当前组合

    function dfs(n, k, start) {
        // k通过控制递归深度来控制路径长度
        if (k === 0) {
            ans.push([...path]); // 收集递归树每个叶子节点到根节点的路径就是一个组合
            return;
        }

        for (let i = start; i <= n; i++) {
            path.push(i);
            dfs(n, k - 1, i + 1); // 展开多个for循环分支，递归深度k加10
            path.pop(); // 回溯恢复现场
        }
    }

    dfs(n, k, 1);
    return ans;
};