// 72. 编辑距离
function minDistance(word1: string, word2: string): number {
    const dp = Array(word1.length + 1).fill(0).map(() => Array(word2.length + 1).fill(0));

    for (let i = 1; i <= word1.length; i++) {
        dp[i][0] = i;
    }

    for (let j = 1; j <= word2.length; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i <= word1.length; i++) {
        for (let j = 1; j <= word2.length; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 1);
            }
        }
    }

    return dp[word1.length][word2.length];
};

// 因为是把word1转换为word2，所以三个操作可以这样理解
// 删除：dp[i-1][j] - word1少了一个字符
// 插入：dp[i][j-1] - word2少了一个字符（相当于word1多了一个字符）
// 替换：dp[i-1][j-1] - 两个字符串都少了一个字符