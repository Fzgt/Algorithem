// 11.盛水最多的容器
function maxArea(height: number[]): number {
    let l = 0, r = height.length - 1;
    let ans = 0;
    while (l < r) {
        let axisY = Math.min(height[l], height[r]);
        let axisX = r - l;
        let product = axisX * axisY;
        ans = Math.max(product, ans);
        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }
    return ans;
};