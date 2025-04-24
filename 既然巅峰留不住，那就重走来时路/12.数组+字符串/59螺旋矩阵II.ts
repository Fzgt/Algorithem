// 59. 螺旋矩阵 II
function generateMatrix(n: number): number[][] {
    const DIRS = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    const ans = new Array(n).fill(0).map(() => new Array(n).fill(0));

    let i = 0, j = 0, dir = 0;
    let num = 1;

    for (let k = 0; k < n*n; k++) {
        ans[i][j] = num;
        num++;
        matrix[i][j] = Infinity;

        const x = i + DIRS[dir][0];
        const y = j + DIRS[dir][1];
        if (x < 0 || x >= n || y < 0 || y >= n || matrix[x][y] === Infinity) {
            dir = (dir + 1) % 4;
        }

        i += DIRS[dir][0];
        j += DIRS[dir][1];
    }

    return ans;
};