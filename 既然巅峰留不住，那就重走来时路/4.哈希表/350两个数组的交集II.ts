// 350. 两个数组的交集 II
function intersect(nums1: number[], nums2: number[]): number[] {
    const map = {};
    const ans = [];
    for (const num1 of nums1) {
        if (map[num1]) {
            map[num1]++;
        } else {
            map[num1] = 1;
        }
    }
    for (const num2 of nums2) {
        const val = map[num2];
        if (val > 0) {
            ans.push(num2);
            map[num2]--;
        }
    }
    return ans;
};