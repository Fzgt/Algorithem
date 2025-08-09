// 56. 合并区间
function merge(intervals: number[][]): number[][] {
    if (intervals.length === 0) return [];

    const res = [];

    intervals.sort((a, b) => a[0] - b[0]);

    res.push(intervals[0]);

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] > res[res.length - 1][1]) { // 无交集
            res.push(intervals[i]);
        } else {
            // 有交集, 但也需要保证当前元素的右端点大于res中最后一个元素的右端点
            // 因为可能有[[1, 4], [2, 3]]这种情况
            if (intervals[i][1] > res[res.length - 1][1]) {
                res[res.length - 1][1] = intervals[i][1];
            }
        }
    }

    return res;
};