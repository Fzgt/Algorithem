// 287. 寻找重复数 值域二分
function findDuplicate(nums: number[]): number {
    let low = 1, high = nums.length - 1;
    while (low < high) {
        const mid = (low + high) >> 1;
        let k = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] <= mid) {
                k++;
            }
        }
        if (k > mid) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
};

// 核心思路：
// 对值域二分。重复数落在 [1, n] ，可以对 [1, n] 这个值域二分查找。
// mid = (1 + n) / 2，重复数要么落在[1, mid]，要么落在[mid + 1, n]。

// 遍历原数组，统计 <= mid 的元素个数，记为 k。

// 如果k > mid，说明有超过 mid 个数落在[1, mid]，但该区间只有 mid 个“坑”，说明重复的数落在[1, mid]。

// 相反，如果k <= mid，则说明重复数落在[mid + 1, n]。

// 对重复数所在的区间继续二分，直到区间闭合，重复数就找到了。