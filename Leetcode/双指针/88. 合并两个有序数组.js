/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let p1 = 0, p2 = 0;
    let sorted = new Array(m + n).fill(0);
    let cur;
    while (p1 < m || p2 < n) {
        if (p1 === m) {   // 若nums1排完了，后边cur全扔nums2
            cur = nums2[p2++];
        } else if (p2 === n) { // 若nums2排完了，后边cur全扔nums1
            cur = nums1[p1++];
        } else if (nums1[p1] > nums2[p2]) { //nums1大就放nums2的元素
            cur = nums2[p2++];
        } else if (nums1[p1] < nums2[p2]) {  //nums2大就放nums1的元素
            cur = nums1[p1++]
        } else { // 两个元素相等，随便选一个放 选nums1 nums2都行
            cur = nums1[p1++]
        }

        sorted[p1 + p2 - 1] = cur; //p1 + p2 - 1 是sorted数组当前索引
    }

    for (let i = 0; i != m + n; ++i) {  //把sorted的有序元素扔给nums1
        nums1[i] = sorted[i]
    }
};