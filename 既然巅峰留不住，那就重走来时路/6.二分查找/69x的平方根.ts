// 69. x的平方根
function mySqrt(x: number): number {
    if (x < 2) return x;
    let left = 1, right = Math.floor(x / 2), mid;

    while (left <= right) {
        mid = Math.floor(left + (right - left) / 2);
        if (mid ** 2 === x) {
            return mid;
        } else if (mid ** 2 > x) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return right;
};