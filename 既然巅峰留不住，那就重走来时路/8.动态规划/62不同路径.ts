// 62. 不同路径
function uniquePaths(m: number, n: number): number {
    const dp = Array(m).fill(0).map(() => Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!i && !j) dp[i][j] = 1;
            else {
                if (i) dp[i][j] += dp[i - 1][j]; // 从上面来
                if (j) dp[i][j] += dp[i][j - 1]; // 从左边来
            }
        }
    }

    return dp[m - 1][n - 1];
};