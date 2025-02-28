// 496. 下一个更大元素 I
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const n = nums1.length, m = nums2.length;
    const res = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        let idx = nums2.indexOf(nums1[i]); // 注意是从nums2中找nums1[i]的位置开始找
        while (idx <= m - 1) {
            if (nums2[idx] > nums1[i]) {
                res[i] = nums2[idx];
                break;
            }
            idx++;
        }
        if (res[i] === 0) res[i] = -1;
    }
    return res;
};