// 152. 乘积最大子数组
function maxProduct(nums: number[]): number {
    let ans = nums[0];
    let preMin = nums[0], preMax = nums[0];

    let temp1 = 0, temp2 = 0;

    for (let i = 1; i < nums.length; i++) {
        temp1 = preMin * nums[i];
        temp2 = preMax * nums[i];

        preMin = Math.min(temp1, temp2, nums[i]);
        preMax = Math.max(temp1, temp2, nums[i]);

        ans = Math.max(preMax, ans);
    }

    return ans;
};