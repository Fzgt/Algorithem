// 40. 组合总和 II
function combinationSum2(candidates: number[], target: number): number[][] {
    candidates.sort((a, b) => a - b);
    const ans = [];

    const dfs = (start, path, sum) => {
        if (sum > target) return;
        if (sum === target) return ans.push(path.slice());

        for (let i = start; i < candidates.length; i++) {
            if (i - 1 >= start && candidates[i - 1] === candidates[i]) { // 和上一个元素相同，跳过
                continue;
            }
            path.push(candidates[i]);
            dfs(i + 1, path, sum + candidates[i]); // 这里是 i + 1，因为不能重复使用同一个元素
            path.pop();
        }
    }
    dfs(0, [], 0);
    return ans;
};