// 15. 三数之和
function threeSum(nums: number[]): number[][] {
    let ans = [];
    if (!nums || nums.length < 3) return []; // 易错点1 小于3个直接返回
    nums.sort((a, b) => a - b);
    if (nums[0] > 0) return []; // 易错点2 如果最小值大于0，说明不可能有三数之和为0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) continue; // 易错点3 记得元素1去重
        let l = i + 1, r = nums.length - 1;
        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            if (sum === 0) {
                ans.push([nums[i], nums[l], nums[r]]);
                while (nums[l] === nums[l + 1]) l++;
                while (nums[r] === nums[r - 1]) r--;
                l++;
                r--;
            }
            else if (sum < 0) l++;
            else if (sum > 0) r--;
        }
    }
    return ans;
};

// 之所以要同时用while去重元素2 3是因为 元素1已经固定，如果元素2或者3再重复，那么另一个元素也被迫固定，就会出现重复三元组
