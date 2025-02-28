// 3. 最长公共前缀
function longestCommonPrefix(strs: string[]): string {
    if (strs === null || strs.length === 0) return '';
    let prevs = strs[0];

    for (let i = 1; i < strs.length; i++) {

        let j = 0; // 放外边方便substring取到
        for (; j < prevs.length && j < strs[i].length; j++) { // j要小于数组里第一个字符串长度，和自己所在的字符串长度
            if (prevs.charAt(j) !== strs[i].charAt(j)) break; // 如果j位置的两个元素不相等，就比到这里
        }

        prevs = prevs.substring(0, j); // substring前闭后开，所以不包括j
        if (prevs === '') return '';
    }
    return prevs;
};