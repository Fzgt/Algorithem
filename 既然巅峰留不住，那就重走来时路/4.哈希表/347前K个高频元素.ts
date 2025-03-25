// 347. 前K个高频元素
function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map();
    const arr = [...new Set(nums)];

    for (const x of nums) {
        map.set(x, (map.get(x) || 0) + 1);
    }

    return arr.sort((a, b) => map.get(b) - map.get(a)).slice(0, k);
};