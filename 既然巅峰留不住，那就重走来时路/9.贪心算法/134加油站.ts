// 134. 加油站
function canCompleteCircuit(gas: number[], cost: number[]): number {
    let curTotal = 0, start = 0, totalGas = 0, totalCost = 0;
    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        curTotal += gas[i] - cost[i];
        if (curTotal < 0) { // 说明前边的点都坏掉，因为从前边任意点start都会在这里断掉。
            start = i + 1;
            curTotal = 0;
        }
    }
    if (totalGas > totalCost) { // 如果总gas大于总cost，说明一定存在一个start能走完，那目前的start值到终点剩余的gas就能填补掉之前的-cost
        return start;;
    }
    return -1;
};