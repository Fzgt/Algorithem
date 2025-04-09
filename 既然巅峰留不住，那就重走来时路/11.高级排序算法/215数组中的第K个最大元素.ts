// 215. 数组中的第 K 个最大元素  快速选择
function findKthLargest(nums: number[], k: number): number {
    return quickSort(nums, 0, nums.length - 1, k - 1);
};

const quickSort = (nums, l, r, k) => {
    if (l === r) return nums[k];

    let x = nums[l], i = l - 1, j = r + 1;

    while (i < j) {
        // 找第 k 大的元素，所以这里实现的分区策略是将较大的元素放在左侧（降序排列思路）。
        do i++; while (x < nums[i]); // 如果找最小元素，改成 x > nums[i]
        do j--; while (x > nums[j]); // 如果找最小元素，改成 x <nums[j]
        if (i < j) [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    if (k <= j) return quickSort(nums, l, j, k);
    else return quickSort(nums, j + 1, r, k);
}