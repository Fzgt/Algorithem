// 31. 下一个排列
function nextPermutation(nums: number[]): void {
    let i = nums.length - 2;                   // 向左遍历，i从倒数第二开始是为了nums[i+1]要存在
    while (i >= 0 && nums[i] >= nums[i + 1]) { // 只要 nums[i] >= nums[i+1] 说明这个位置不满足要求（这一对是降序）
        i--;
    }
    if (i >= 0) {                             // 这个数在数组中存在，从它身后找第一个大于nums[i]的数
        let j = nums.length - 1;                // 从最后一项，向左遍历
        while (j >= 0 && nums[j] <= nums[i]) {
            j--;
        }
        [nums[i], nums[j]] = [nums[j], nums[i]]; // 一旦找到，就把 nums[i] 和 nums[j] 交换
    }
    // 在交换之后，位置i后面的数字序列是降序的（因为我们第一步就是这样找的）。要得到最小的变大排列，我们需要把i后面的序列反转为升序
    // 这里包含了i=-1的情况
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
        [nums[l], nums[r]] = [nums[r], nums[l]];
        l++;
        r--;
    }
};


// 这个算法本质上是寻找一个位置，使得修改这个位置及其后面的数，能得到一个比当前排列大，但又是大中最小的排列。
// 思路：先从后往前找一个升序对nums[i] nums[i+1]，然后从右边找第一个比nums[i]大的数nums[j]，交换这两个数，然后把i+1到最后的数翻转一下。

// 如果整个数都是降序，就说明没有比它更大的排列了，比如54321