// 20. 有效的括号
function isValid(s: string): boolean {
    while (true) {
        let len = s.length;
        s = s.replace('()', '');
        s = s.replace('[]', '');
        s = s.replace('{}', '');
        if (len === s.length) {
            if (len === 0) {
                return true;
            } else {
                return false;
            }
        }
    }
};