// 32. 最长有效括号
function longestValidParentheses(s: string): number {
    let maxLen = 0;
    const stack = [];
    stack.push(-1);

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length) {
                const curMaxLen = i - stack[stack.length - 1];
                maxLen = Math.max(maxLen, curMaxLen);
            } else {
                stack.push(i);
            }
        }
    }

    return maxLen;
};


// 举例说明：
// 对于字符串 ")()()"：

// 初始状态：栈 = [-1]
// 遇到右括号')'：弹出-1，栈空了，将当前索引0入栈作为新参考点，栈 = [0]
// 遇到左括号'('：入栈，栈 = [0, 1]
// 遇到右括号')'：弹出1，栈 = [0]，计算长度2-0=2，最大长度=2
// 遇到左括号'('：入栈，栈 = [0, 3]
// 遇到右括号')'：弹出3，栈 = [0]，计算长度4-0=4，最大长度=4
//                                这里4-0就对应的 i - stack[stack.length - 1]