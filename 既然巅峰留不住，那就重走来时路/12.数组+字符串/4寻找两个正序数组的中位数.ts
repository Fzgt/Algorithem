// 4. 寻找两个正序数组的中位数
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const tempArr = nums1.concat(nums2);
    const newArr = tempArr.sort((a, b) => a - b);
    return getMedian(newArr);
};

const getMedian = (arr) => {
    const len = arr.length;
    if (len % 2 === 0) { // 偶数
        const ele1 = len / 2 - 1;
        const ele2 = len / 2;
        return (arr[ele1] + arr[ele2]) / 2;
    } else { // 奇数
        const ele = (len - 1) / 2;
        return arr[ele];
    }
}