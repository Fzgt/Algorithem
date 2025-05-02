// 278. 第一个错误的版本
var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let left = 1, right = n;
        while (left < right) {
            const mid = left + Math.floor((right - left) / 2);
            if (isBadVersion(mid)) { // version出错，所以第一个错误版本在前边
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left; // 此时left == right 区间缩为一个点，即答案
    };
};