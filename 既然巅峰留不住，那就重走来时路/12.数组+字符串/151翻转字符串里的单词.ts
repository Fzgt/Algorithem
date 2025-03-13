// 151. 翻转字符串里的单词
function reverseWords(s: string): string {
    const arr = s.trim().split(' ');
    const ans = [];

    for (const item of arr) {
        if (item === ' ' || item === '') {
            continue;
        } else {
            ans.push(item);
        }
    }

    return ans.reverse().join(' ');
};