// 209. 长度最小的子数组
function minSubArrayLen(target: number, nums: number[]): number {
    let ans = 0, l = 0, sum = 0;

    for (let r = 0; r < nums.length; r++) {
        sum += nums[r];

        while (sum >= target) {
            ans = ans === 0 ? r - l + 1 : Math.min(ans, r - l + 1);
            sum -= nums[l];
            l++;
        }
    }

    return ans;
};