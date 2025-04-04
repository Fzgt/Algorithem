// 64. 最小路径和
function minPathSum(grid: number[][]): number {
    const n = grid.length;
    if (!n) return 0;
    const m = grid[0].length;
    const record = new Array(n).fill(0).map(() => new Array(m).fill(Infinity));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (!i && !j) {
                record[i][j] = grid[i][j]; // 0,0点直接赋值
            } else {
                // 只要i和j不为0, 就要计算它从上面和左边来的最小值
                if (i) {
                    record[i][j] = Math.min(record[i][j], record[i - 1][j] + grid[i][j]);
                }
                if (j) {
                    record[i][j] = Math.min(record[i][j], record[i][j - 1] + grid[i][j]);
                }
            }
        }
    }

    return record[n - 1][m - 1];
};