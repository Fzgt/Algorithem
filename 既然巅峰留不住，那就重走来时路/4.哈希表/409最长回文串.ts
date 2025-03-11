// 409. 最长回文串
function longestPalindrome(s: string): number {
    const map = new Map(); // 统计每个字符出现的次数

    let res = 0;

    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) { // 字符第一次出现，添加到map中
            map.set(s[i], 1);
        } else { // 字符出现过，这是第二次，就res+2，然后清掉map中的这个字符
            res += 2;
            map.delete(s[i]);
        }
    }

    if (s.length > res) { // 如果字符串长度大于当前回文串长度，说明有剩余字符，可以放在回文串的中间
        res += 1;
    }

    return res;
};