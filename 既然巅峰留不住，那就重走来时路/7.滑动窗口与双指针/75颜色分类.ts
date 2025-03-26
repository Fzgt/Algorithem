/**
 Do not return anything, modify nums in-place instead.
 */
// 75. 颜色分类
function sortColors(nums: number[]): void {
    let l = 0, r = nums.length - 1, i = 0;

    while (i <= r) {
        if (nums[i] === 0) {
            swap(nums, l, i);
            l++;
            i++;
        } else if (nums[i] === 2) {
            swap(nums, r, i);
            r--;
            // i++; i不移动因为交换后的元素还需要再判断
        } else {
            i++;
        }
    }
};

const swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

// 把0交换到前面，2交换到后面，1自然就在中间了