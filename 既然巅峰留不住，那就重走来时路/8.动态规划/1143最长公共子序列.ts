// 1143. 最长公共子序列
function longestCommonSubsequence(text1: string, text2: string): number {
    const m = text1.length, n = text2.length;
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
    for (let i = 1; i <= m; i++) {
        const char1 = text1[i - 1];
        for (let j = 1; j <= n; j++) {
            const char2 = text2[j - 1];
            if (char1 === char2) {
                dp[i][j] = dp[i - 1][j - 1] + 1; // 如果当前字符相同，则最长公共子序列长度加1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[m][n];
};