function findMin(nums: number[]): number {
    let l = 0, r = nums.length - 1;
    while (l < r) {
        let mid = l + ((r - l) >> 1);
        if (nums[mid] < nums[r]) { // 没取到mid，mid未知的，所以r可以直接取mid
            r = mid;
        } else { // 这里else相当于 nums[mid] >= nums[r], 那说明最小值在右侧，l可以直接取mid+1
            l = mid + 1;
        }
    }

    return nums[l];
};