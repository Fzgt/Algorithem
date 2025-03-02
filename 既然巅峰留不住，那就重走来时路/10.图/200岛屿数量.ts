// 200. 岛屿数量
function numIslands(grid: string[][]): number {
    if (!grid || grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;

    function dfs(x: number, y: number): void { // 这个dfs就做一件事，把当前岛屿周围的岛屿全部沉没
        // 当前元素索引横纵坐标越界或是水 return
        if (
            x < 0 ||
            x >= rows ||
            y < 0 ||
            y >= cols ||
            grid[x][y] === '0'
        ) {
            return;
        }

        // 访问过就标记为0
        grid[x][y] = '0';

        // 向四个方向递归
        dfs(x - 1, y);
        dfs(x + 1, y);
        dfs(x, y - 1);
        dfs(x, y + 1);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                count++; // 遇到岛屿计数加1，并dfs周围的岛屿全部沉没
                dfs(i, j);
            }
        }
    }

    return count;
};