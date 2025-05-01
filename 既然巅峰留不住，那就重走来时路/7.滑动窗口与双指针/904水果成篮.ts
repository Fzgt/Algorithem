// 904. 水果成篮
function totalFruit(fruits: number[]): number {
    const map = new Map();
    let l = 0, ans = 0;

    for (let r = 0; r < fruits.length; r++) {
        map.set(fruits[r], (map.get(fruits[r]) || 0) + 1);
        while (map.size > 2) {
            map.set(fruits[l], map.get(fruits[l]) - 1);
            if (map.get(fruits[l]) === 0) {
                map.delete(fruits[l]);
            }
            l++;
        }
        ans = Math.max(ans, r - l + 1);
    }
    return ans;
};