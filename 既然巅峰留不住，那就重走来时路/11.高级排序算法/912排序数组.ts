// 912. 排序数组 快排版
function sortArray(nums: number[]): number[] {
    quick_sort(nums, 0, nums.length - 1);
    return nums;
}

const quick_sort = (q: number[], l: number, r: number): void => {
    if (l >= r) return;

    let i = l - 1, j = r + 1;
    const x = q[Math.floor((l + r) >> 1)];

    while (i < j) {
        do i++; while (q[i] < x);
        do j--; while (q[j] > x);
        if (i < j) [q[i], q[j]] = [q[j], q[i]];
    }

    quick_sort(q, l, j);
    quick_sort(q, j + 1, r);
}