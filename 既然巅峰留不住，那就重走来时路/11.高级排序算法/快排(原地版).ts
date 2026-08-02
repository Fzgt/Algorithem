// 快排(原地版)
function findKthLargest(nums: number[], k: number): number {
	quickSort(nums, 0, nums.length - 1); // 把整个数组排好序(从小到大)
	return nums[nums.length - k]; // 排序后,第k大的元素,就是"倒数第k个"
}

function quickSort(nums: number[], l: number, r: number): void {
	if (l >= r) return; // 区间只剩0或1个元素,不用再排了

	let pivot = nums[r]; // 选最右边的元素作为基准值
	let i = l - 1; // i指向"已确定小于pivot的区域"的最后一个位置

	for (let j = l; j < r; j++) {
		if (nums[j] < pivot) {
			i++;
			[nums[i], nums[j]] = [nums[j], nums[i]]; // 把小于pivot的元素往左边挪
		}
	}

	[nums[i + 1], nums[r]] = [nums[r], nums[i + 1]]; // 把pivot放到它最终该在的位置
	let pivotIndex = i + 1;

	quickSort(nums, l, pivotIndex - 1); // 递归排左边
	quickSort(nums, pivotIndex + 1, r); // 递归排右边
}
