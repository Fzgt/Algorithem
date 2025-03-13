// 121. 买卖股票的最佳时机
function maxProfit(prices: number[]): number {
    let minPrice = prices[0];
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        profit = Math.max(profit, prices[i] - minPrice);
        minPrice = Math.min(minPrice, prices[i]);
    }
    return profit;
};