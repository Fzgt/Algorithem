// 42. 接雨水
function trap(height: number[]): number {
    let l = 0, r = height.length - 1;
    let lMax = 0, rMax = 0, res = 0;
    while (l < r) {
        if (height[l] < height[r]) {
            if (height[l] > lMax) {
                lMax = height[l];
            } else {
                res += lMax - height[l];
            }
            l++;
        } else {
            if (height[r] > rMax) {
                rMax = height[r];
            } else {
                res += rMax - height[r];
            }
            r--;
        }
    }
    return res;
};