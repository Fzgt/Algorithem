// 300. 最长递增子序列
function lengthOfLIS(nums: number[]): number {
    let dp = Array(nums.length).fill(1);
    let result = 1;

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        result = Math.max(result, dp[i]);
    }

    return result;
};

// result初始化为1，因为一个元素也是最长递增子序列

// dp[i] 表示：以 nums[i] 结尾的最长递增子序列的长度
// 对于每个位置 i，我们需要查看它前面的所有元素 j（其中 j < i）
// 如果 nums[i] > nums[j]，那么我们可以将 nums[i] 接到以 nums[j] 结尾的递增子序列后面
// 此时长度会变成 dp[j] + 1 (前面序列长度 + 当前元素)
// 我们需要在所有可能的 j 中找到最大的 dp[j] + 1 作为 dp[i] 的值
// if(nums[i] > nums[j]) {
//     dp[i] = Math.max(dp[i], dp[j]+1);
// }
