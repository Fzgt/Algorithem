// 74. 搜索二维矩阵 左侧二分+坐标转换
function searchMatrix(matrix: number[][], target: number): boolean {
    const n = matrix.length, m = matrix[0].length;
    let i = 0, j = m - 1; // 从右上角开始查找
    while (i < n && j >= 0) {
        if (matrix[i][j] === target) {
            return true;
        }
        if (matrix[i][j] < target) {
            i++;
        } else {
            j--;
        }
    }
    return false;
};