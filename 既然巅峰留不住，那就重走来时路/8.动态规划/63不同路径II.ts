// 63. 不同路径 II
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const n = obstacleGrid.length, m = obstacleGrid[0].length;
    const dp = new Array(n).fill(0).map(() => new Array(m).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (!obstacleGrid[i][j]) { // 遇到障碍物就绕过去，只计算不遇到障碍物的路径
                if (!i && !j) dp[0][0] = 1;
                else {
                    if (i) dp[i][j] += dp[i - 1][j];
                    if (j) dp[i][j] += dp[i][j - 1];
                }
            }
        }
    }

    return dp[n - 1][m - 1];
};