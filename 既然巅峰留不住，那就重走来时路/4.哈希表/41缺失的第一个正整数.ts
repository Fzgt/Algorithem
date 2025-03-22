// 41. 缺失的第一个正整数 (原地哈希)
function firstMissingPositive(nums: number[]): number {
    const n = nums.length;

    if (!n) return 1;

    // 将负数和0处理成不影响结果的值，只关心1到n范围内的正整数
    for (let i = 0; i < n; i++) {
        if (nums[i] <= 0) nums[i] = Infinity;
    }

    // 保证值为i的元素，在索引i-1的位置上
    for (let i = 0; i < n; i++) {
        // 当前数在有效范围内，且当前数不等于索引+1，且当前数不等于目标位置的数
        while (
            nums[i] >= 1 &&
            nums[i] <= n &&
            nums[i] !== i + 1 &&  // 说明nums[i]不在正确的位置上
            nums[i] !== nums[nums[i] - 1] // 防止换位置两个数相等导致死循环
        ) {
            const temp = nums[i];
            nums[i] = nums[temp - 1];
            nums[temp - 1] = temp;
        }
    }

    // 找出第一个不满足nums[i] = i+1的数
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1; // 这个位置就是缺失的第一个正整数
        }
    }

    // 如果数组包含了1到n的所有数，那么缺失的第一个正整数就是n+1
    return n + 1;
};


// // 41. 缺失的第一个正整数 (使用额外空间版)
// function firstMissingPositive(nums: number[]): number {
//     const set = new Set();

//     for (const num of nums) {
//         set.add(num);
//     }

//     let res = 1;

//     while (set.has(res)) {
//         res++;
//     }

//     return res;
// };