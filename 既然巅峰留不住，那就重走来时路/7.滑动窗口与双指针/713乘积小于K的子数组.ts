// 713 乘积小于K的子数组
function numSubarrayProductLessThanK(nums: number[], k: number): number {
    if (k <= 1) return 0;

    let ans = 0, prod = 1, l = 0;

    for (let r = 0; r < nums.length; r++) {

        prod *= nums[r];

        while (prod >= k) {
            prod /= nums[l];
            l++;
        }

        ans += r - l + 1; // 以r结尾的子数组个数
    }

    return ans;
};