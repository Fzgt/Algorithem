// 240. 搜索二维矩阵 II
function searchMatrix(matrix: number[][], target: number): boolean {
    const n = matrix.length, m = matrix[0].length;
    let i = 0, j = m - 1; // 从右上角开始搜索
    while (i < n && j >= 0) { // 边界就是左下角的坐标
        if (matrix[i][j] === target) {
            return true;
        }
        if (matrix[i][j] < target) {
            i++; // 从右上角开始，所以如果当前值小于目标值，说明当前行的值都小于目标值，所以往下走
        } else {
            j--; // 如果当前值大于目标值，说明当前列的值都大于目标值，所以往左走
        }
    }
    return false;
};