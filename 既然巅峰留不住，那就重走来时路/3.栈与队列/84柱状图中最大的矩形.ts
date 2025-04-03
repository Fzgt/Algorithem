// 84. 柱状图中最大的矩形
function largestRectangleArea(heights: number[]): number {
    let maxArea = 0;
    const stack = [];
    heights = [0, ...heights, 0]
    for (let i = 0; i < heights.length; i++) {
        while (heights[i] < heights[stack[stack.length - 1]]) {
            const stackTopIndex = stack.pop()
            maxArea = Math.max(
                maxArea,
                heights[stackTopIndex] * (i - stack[stack.length - 1] - 1)
            )
        }
        stack.push(i)
    }
    return maxArea
};

// 遍历每个柱子：

// 遇到第一个0，入栈
// 遇到2，比0高，入栈
// 遇到1，比2矮：

// 弹出2，计算以2为高的最大矩形：2×1=2
// 将1入栈


// 遇到5，比1高，入栈
// 遇到6，比5高，入栈
// 遇到2，比6矮：

// 弹出6，计算以6为高的最大矩形：6×1=6
// 弹出5，计算以5为高的最大矩形：5×2=10
// 将2入栈


// 遇到3，比2高，入栈
// 遇到最后的0，比3矮：

// 依次处理栈中所有元素...