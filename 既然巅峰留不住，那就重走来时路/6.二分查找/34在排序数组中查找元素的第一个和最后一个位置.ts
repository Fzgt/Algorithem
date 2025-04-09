// 34. 在排序数组中查找元素的第一个和最后一个位置
function searchRange(nums: number[], target: number): number[] {
    if (nums.length === 0) return [-1, -1];
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);
        if (nums[mid] >= target) { // 左侧二分
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    if (nums[l] !== target || l >= nums.length) return [-1, -1];
    let ans = [l];
    r = nums.length - 1; // 保持l不变，r 重新赋值
    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);
        if (nums[mid] <= target) { // 右侧二分
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    ans.push(r);
    return ans;
};

// 两次二分查找的条件稍有不同，这是为了找到精确的左右边界
// 第一次查找结束后，l 指向第一个 >= target 的位置
// 第二次查找结束后，r 指向最后一个 <= target 的位置