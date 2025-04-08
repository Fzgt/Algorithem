// 416. 分割等和子集 记忆化递归
function canPartition(nums: number[]): boolean {
    let sum = 0;
    for (const n of nums) {
        sum += n;
    }
    if (sum % 2 != 0) return false; // 如果总和是奇数，不能分成两个相等的子集
    const memo = new Map();
    const target = sum / 2;

    const dfs = (curSum, i) => {
        if (i == nums.length || curSum > target) { // 如果已经遍历完所有元素，或者当前和大于目标和
            return false;
        }
        if (curSum == target) {
            return true;
        }
        const key = curSum + '&' + i;
        if (memo.has(key)) {
            return memo.get(key);
        }
        const res = dfs(curSum + nums[i], i + 1) || dfs(curSum, i + 1);
        memo.set(key, res);
        return res;
    };

    return dfs(0, 0);
};