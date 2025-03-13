// 122. 买卖股票的最佳时机 II
function maxProfit(prices: number[]): number {
    let sum = 0;
    for (let i = 1; i < prices.length; i++) {
        // 连续上涨的区间可以拆分成多个"每天"的小收益，总和不变
        let profit = Math.max(0, prices[i] - prices[i - 1])
        sum += profit;
    }
    return sum;
};