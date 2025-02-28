// 71. 简化路径
function simplifyPath(path: string): string {
    const names = path.split('/');
    const stack = [];
    for (const name of names) {
        if (name === "..") {
            if (stack.length) {
                stack.pop(); //..返回上一级就删一个
            }
        } else if (name.length && name !== '.') {
            stack.push(name); //过滤name为.和空字符串情况
        }
    }
    return '/' + stack.join('/'); //绝对路径 前边补个/
};