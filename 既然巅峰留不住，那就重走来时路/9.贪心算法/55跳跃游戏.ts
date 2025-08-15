// 55. 跳跃游戏
function canJump(nums: number[]): boolean {
    let road = 0;  // 当前能到达的最远位置
    
    for (let i = 0; i < nums.length; i++) {
        // 如果当前位置超出了能到达的最远距离，说明到不了
        if (i > road) return false;
        
        // 更新能到达的最远位置
        // 进了这个for循环，说明当前位置i是能到达的
        // 再加个nums[i]，就能更新到最远位置
        road = Math.max(road, i + nums[i]);
    }
    
    return true;
}

// 核心思想是维护当前能到达的最远位置