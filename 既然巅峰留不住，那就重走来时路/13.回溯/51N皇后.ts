// 51. N皇后
function solveNQueens(n: number): string[][] {
    const grid = new Array(n).fill(0).map(item => new Array(n).fill('.'));
    const cols = new Set();
    const d1 = new Set();
    const d2 = new Set();
    const ans = [];

    const dfs = row => {
        if (row === n) {
            return ans.push(grid.map(row => row.join('')));
        }
        for (let col = 0; col < n; col++) {
            if (!cols.has(col) && !d1.has(row - col) && !d2.has(row + col)) {
                grid[row][col] = 'Q';
                cols.add(col);
                d1.add(row - col);
                d2.add(row + col);

                dfs(row + 1);

                grid[row][col] = '.';
                cols.delete(col);
                d1.delete(row - col);
                d2.delete(row + col);
            }
        }
    }

    dfs(0);
    return ans;
};