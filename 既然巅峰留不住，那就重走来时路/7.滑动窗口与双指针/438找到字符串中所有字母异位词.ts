// 438. 找到字符串中所有字母异位词 滑动窗口
function findAnagrams(s: string, p: string): number[] {
    const ans = [];

    const map = new Map();
    const window = new Map();

    for (const char of p) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    let l = 0;
    for (let r = 0; r < s.length; r++) {
        const cur = s[r];
        window.set(cur, (window.get(cur) || 0) + 1);

        if (r - l + 1 > p.length) {
            const leftChar = s[l];
            window.set(leftChar, window.get(leftChar) - 1);
            if (window.get(leftChar) < 1) {
                window.delete(leftChar);
            }
            l++;
        }

        if (r - l + 1 === p.length) {
            if (mapEqual(map, window)) {
                ans.push(l);
            }
        }
    }

    return ans;
};

const mapEqual = (mapA, mapB) => {
    if (mapA.size !== mapB.size) return false;
    for (const [key, val] of mapA) {
        if (!mapB.get(key) || mapB.get(key) !== val) {
            return false;
        }
    }
    return true;
}