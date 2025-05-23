// 5. 最长回文子串
function longestPalindrome(s: string): string {
    let res = '';

    for (let i = 0; i < s.length; i++) {
        let l = i - 1, r = i + 1; // 假设字符串长度为奇数，所以nums[i]的左侧索引是i-1，右侧索引是i+1
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--;
            r++;
        }
        if (res.length < (r - 1) - (l + 1) + 1) {
            res = s.substring(l + 1, r);
        }

        l = i, r = i + 1; // 假设字符串长度为偶数
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--;
            r++;
        }

        if (res.length < (r - 1) - (l + 1) + 1) { // while 循环结束后，l 和 r 已经超出了回文串的边界
            res = s.substring(l + 1, r);
        }
    }

    return res;
};