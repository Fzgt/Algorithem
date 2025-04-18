// 79. 单词搜索
function exist(board: string[][], word: string): boolean {
    const m = board.length;
    const n = board[0].length;
    const used = new Array(m).fill(0).map(() => new Array(n));

    const dfs = (row, col, i) => {
        if (i == word.length) { // i越界返回true，说明word的所有字符都匹配成功
            return true;
        }
        if (row < 0 || row >= m || col < 0 || col >= n) {
            return false;
        }
        if (used[row][col] || board[row][col] != word[i]) {
            return false;
        }

        used[row][col] = true;
        const ans = dfs(row + 1, col, i + 1) || dfs(row - 1, col, i + 1) ||
            dfs(row, col + 1, i + 1) || dfs(row, col - 1, i + 1);

        if (ans) return true;

        used[row][col] = false;
        return false;
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == word[0] && dfs(i, j, 0)) {
                return true;
            }
        }
    }

    return false;
}