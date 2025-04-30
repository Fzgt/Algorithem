// 647. 回文子串
function countSubstrings(s: string): number {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (isPalindrome(s.substring(i, j + 1))) {
                count++;
            }
        }
    }
    return count;
};

const isPalindrome = s => {
    let l = 0, r = s.length - 1;
    while (l < r) {
        if (s[l] != s[r]) return false;
        l++;
        r--;
    }
    return true;
}