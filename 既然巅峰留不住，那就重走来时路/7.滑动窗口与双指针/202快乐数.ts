// 202. 快乐数
function isHappy(n: number): boolean {

    let slow = n;
    let fast = getNext(n);

    // 退出循环条件：要么满足要求得到1了，要么两个指针相遇了
    while (fast !== 1 && fast !== slow) {
        slow = getNext(slow);             // 慢指针一步
        fast = getNext(getNext(fast));    // 快指针两步
    }

    return fast === 1;
};


let getNext = function (n) {
    return n.toString()
        .split('')
        .map(i => i ** 2) // 对每个字符平方，自动转类型
        .reduce((a, b) => a + b);
}