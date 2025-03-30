// 322. 零钱兑换
function coinChange(coins: number[], amount: number): number {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0; // 凑凑金额0需要0个硬币

    for (let i = 1; i <= amount; i++) { // 遍历到amount所有金额
        for (let coin of coins) { // 遍历可用面额
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
                // dp[i]：表示凑成金额 i 所需的最少硬币个数（当前已知的最优解）
                // dp[i]和dp[i - coin]取最小值是因为
                // 计算这个硬币面额之前，别的面额可能进来i - coin >= 0 这个判断
                // 因此dp[i]可能已经有值，或者没有就是Infinity
                // 因此需要比较之前的dp[i]和当前方案dp[i - coin] + 1哪个是最优解（更小）
                // 且如果dp[i - coin]不存在，它会是Infinity
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount]; // 如果dp[amount]等于Infinity，说明凑不到
};