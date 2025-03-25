// 54. 螺旋矩阵
function spiralOrder(matrix: number[][]): number[] {
    const DIRS = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // 右下左上

    const rows = matrix.length, cols = matrix[0].length;
    const ans = [];

    let i = 0, j = 0, dir = 0; // dir是方向数组的索引

    for (let k = 0; k < rows * cols; k++) {

        ans.push(matrix[i][j]);
        matrix[i][j] = Infinity; // 标记已经访问过

        const x = i + DIRS[dir][0];
        const y = j + DIRS[dir][1];
        if (x < 0 || x >= rows || y < 0 || y >= cols || matrix[x][y] === Infinity) {
            dir = (dir + 1) % 4; // 顺时针旋转90度
        }

        i += DIRS[dir][0]; // 移动
        j += DIRS[dir][1];
    }

    return ans;
};


// // 54. 螺旋矩阵
// function spiralOrder(matrix: number[][]): number[] {
//     const DIRS = [[0, 1], [1, 0], [0, -1], [-1, 0]];

//     const n = matrix.length, m = matrix[0].length;
//     const ans = [];
//     let i = 0, j = 0, dir = 0;

//     for (let x = 0; x < n * m; x++) {
//         ans.push(matrix[i][j]);
//         matrix[i][j] = Infinity;

//         let axisX = i + DIRS[dir][0];
//         let axisY = j + DIRS[dir][1];
//         if (axisX < 0 || axisX >= n || axisY < 0 || axisY >= m || matrix[axisX][axisY] === Infinity) {
//             dir = (dir + 1) % 4;
//         }

//         i += DIRS[dir][0];
//         j += DIRS[dir][1];
//     }

//     return ans;
// };