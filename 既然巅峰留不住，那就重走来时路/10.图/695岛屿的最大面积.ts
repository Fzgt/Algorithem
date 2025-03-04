// 695. 岛屿的最大面积
function maxAreaOfIsland(grid: number[][]): number {
    let row = grid.length, cols = grid[0].length;

    const dfs = (x: number, y: number): number => {
        if (x < 0 || x >= row || y < 0 || y >= cols || grid[x][y] === 0) return 0; //非岛屿返回0
        grid[x][y] = 0;
        let ans = 1, dx = [-1, 1, 0, 0], dy = [0, 0, 1, -1];
        for (let i = 0; i < dx.length; i++) {
            ans += dfs(x + dx[i], y + dy[i]);
        }
        return ans;
    }

    let res = 0;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < cols; j++) {
            res = Math.max(res, dfs(i, j));
        }
    }

    return res;
};