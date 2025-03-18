/**
 Do not return anything, modify matrix in-place instead.
 */
// 73. 矩阵置零
function setZeroes(matrix: number[][]): void {
    const n = matrix.length, m = matrix[0].length;

    const row = new Array(n).fill(false);
    const col = new Array(m).fill(false);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 0) {
                row[i] = col[j] = true;
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (row[i] || col[j]) {
                matrix[i][j] = 0;
            }
        }
    }
};