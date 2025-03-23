// 7. 整数反转
function reverse(x: number): number {
    let ans = 0;

    while (x !== 0) { // 从这个数里一位一位的取，没取完就一直取
        const digit = x % 10; // 拿到最后一位的值

        // 再删掉最后一位，使用Math.trunc()函数将小数部分截断，保留整数部分
        // 使用parseInt(x/10)或Math.floor(x/10)也可以
        x = Math.trunc(x / 10);

        // 将当前结果乘以10并加上新的数字，构建反转后的数
        ans = ans * 10 + digit;

        // 检查是否溢出32位有符号整数范围
        if (ans < Math.pow(-2, 31) || ans > Math.pow(2, 31) - 1) {
            return 0;
        }
    }

    return ans;
};