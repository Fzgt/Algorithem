// 207. 课程表
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const inDegree = new Array(numCourses).fill(0); // 入度数组，统计每门课的入度，索引为课程号，值为入度
    const map = {};                                 // 邻接表，统计每门课的后续课
    for (let i = 0; i < prerequisites.length; i++) {
        inDegree[prerequisites[i][0]]++;              // 求课的初始入度值
        if (map[prerequisites[i][1]]) {               // 当前课已经存在于邻接表
            map[prerequisites[i][1]].push(prerequisites[i][0]); // 添加依赖它的后续课
        } else {                                      // 当前课不存在于邻接表
            map[prerequisites[i][1]] = [prerequisites[i][0]];
        }
    }
    const queue = [];
    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] == 0) queue.push(i); // 入度为0即没有前置课，a<--b，a入度为1，a不能选
    }
    let count = 0;
    while (queue.length) {
        const selected = queue.shift();
        count++;                                  // 选课数++
        const toEnQueue = map[selected];          // 获取这门课对应的后续课
        if (toEnQueue && toEnQueue.length) {
            for (let i = 0; i < toEnQueue.length; i++) {
                inDegree[toEnQueue[i]]--;             // selected的每门后续课入度-1
                if (inDegree[toEnQueue[i]] == 0) {    // 如果某后续课入度为0，入列
                    queue.push(toEnQueue[i]);
                }
            }
        }
    }
    return count == numCourses; // count等于总课数true，否则说明有循环依赖false

};