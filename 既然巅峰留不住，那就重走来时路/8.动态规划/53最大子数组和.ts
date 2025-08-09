// 53. 最大子数组和
function maxSubArray(nums: number[]): number {
    let ans = nums[0]; // 初始化为nums[0]可以处理所有情况，将 ans 初始化为 0，
                       // 在某些情况下（如所有元素都是负数）会让 ans 无法更新，一直为 0
    let sum = 0;
    for (const num of nums) {
        if (sum + num > num) { // 判断之前的和是否对当前num有贡献，如果小于num那不如直接从num开始
            // 不用 sum + num > sum 判断新num对之前有没有贡献，是因为sum可能是负数，num可能是正数
            sum += num
        } else {
            sum = num
        }
        ans = Math.max(ans, sum)
    }
    return ans
};