/* 26. 删除有序数组中的重复项
 给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，
 返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。
 不要使用额外的空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。*/

/**
 * @param {number[]} nums
 * @return {number}
 */

const removeDuplicates = nums => {
    if (nums.length === 0) return 0;
    let slow = 0, fast = 0;
    while (fast < nums.length) {
        if (nums[slow] != nums[fast]) {
            slow++;
            nums[slow] = nums[fast];
        }
        fast++;
    }
    return slow + 1;
};