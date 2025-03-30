// 198. 打家劫舍
function rob(nums: number[]): number {
    const n = nums.length;

    const f = new Array(n + 1).fill(0);
    const g = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        f[i] = g[i - 1] + nums[i - 1];
        g[i] = Math.max(f[i - 1], g[i - 1]);
    }

    return Math.max(f[n], g[n]);
};

// 第一个方程：f[i] = g[i - 1] + nums[i - 1]    
// f[i]         表示偷第 i 个房子能获得的最大金额
// nums[i - 1]  当前房子（第 i 个）的金额（索引从 0 开始，所以是 i-1）
// g[i - 1]     不偷上一个房子（第 i-1 个）时能获得的最大金额
// 总结：当前房子金额 = 不偷上一个房子时能获得的最大金额g[i - 1] + 当前房子金额nums[i - 1]

// 第二个方程：g[i] = Math.max(f[i - 1], g[i - 1])
// g[i]         表示不偷第 i 个房子时能获得的最大金额
// f[i - 1]：   偷上一个房子（第 i-1 个）时能获得的最大金额
// g[i - 1]：   不偷上一个房子（第 i-1 个）时能获得的最大金额
// 为什么可以有两种选择？
// 因为我决定不偷第 i 个房子，那么对于第 i-1 个房子，我既可以选择偷，也可以选择不偷，没有限制。我只需要选择能让我获得更多钱的那个选择。
