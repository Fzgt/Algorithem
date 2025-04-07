// 279. 完全平方数
function numSquares(n: number): number {
    const dp = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {

        dp[i] = Infinity;

        for (let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
        }

    }

    return dp[n];
};