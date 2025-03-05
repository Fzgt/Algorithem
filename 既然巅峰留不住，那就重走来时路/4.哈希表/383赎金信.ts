// 383. 赎金信
function canConstruct(ransomNote: string, magazine: string): boolean {
    const mapA = iterateArr(ransomNote);
    const mapB = iterateArr(magazine);

    for (const [k, v] of mapA.entries()) {
        if (!mapB.has(k) || (mapB.get(k) < v)) {
            return false;
        }
    }

    return true;
};

const iterateArr = (str: string): Map<string, number> => {
    const map = new Map<string, number>;
    for (const val of Array.from(str)) {
        if (map.has(val)) {
            map.set(val, map.get(val) + 1);
        } else {
            map.set(val, 1);
        }
    }
    return map;
}