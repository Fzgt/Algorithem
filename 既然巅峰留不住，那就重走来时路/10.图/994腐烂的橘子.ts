// 994. 腐烂的橘子 多源bfs
function orangesRotting(grid: number[][]): number {
    const n = grid.length, m = grid[0].length;
    const queue = [];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            }
        }
    }

    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, 1, -1];

    let time = 0;
    if (queue.length) time--;
    while (queue.length) {
        time++;

        let oranges = queue.length;

        while (oranges--) {
            const [x, y] = queue.shift();

            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];

                if (nx < 0 || nx >= n || ny < 0 || ny >= m || grid[nx][ny] !== 1) {
                    continue;
                }

                grid[nx][ny] = 2;

                queue.push([nx, ny]);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 1) {
                return -1;
            }
        }
    }

    return time;
};

// 关于 time = 0; if (queue.length) time--; 
// 不能直接-1,因为有可能没有腐烂橘子，就不会进入底下的while循环
// 队列有腐烂橘子time--，第一批腐烂橘子不需要时间
// time-1后说明有腐烂橘子 会进入循环time++，time再次为0
// 这样如果while循环第一次处理完，不再有腐烂橘子，也正好time是0，不会多加1