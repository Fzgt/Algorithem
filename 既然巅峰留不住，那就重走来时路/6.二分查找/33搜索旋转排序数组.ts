// 33. 搜索旋转排序数组
function search(nums: number[], target: number): number {
    let start = 0, end = nums.length - 1;

    while (start <= end) {
        let mid = start + ((end - start) >> 1);

        if (nums[mid] === target) return mid; // 这里处理mid等于target的情况，所以底下的if语句都不包含mid

        if (nums[start] <= nums[mid]) { // 判断左边有序就左边找，否则就去右边找，二分查找只作用于有序数组
            if (nums[start] <= target && target < nums[mid]) {
                end = mid - 1; // 目标在左区间，移动右边界
            } else {
                start = mid + 1; // 目标不在左区间，移动左边界
            }
        } else { // [mid, end]右侧有序的情况
            if (nums[mid] < target && target <= nums[end]) {
                start = mid + 1; // 目标在右区间，移动左边界
            } else {
                end = mid - 1; // 目标在左区间，移动右边界
            }
        }
    }

    return -1;
};