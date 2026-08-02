Promise.all([...]) 全部成功才成功,返回结果数组;只要有一个失败,整体立刻reject
Promise.race([...]) 谁先完成(不管成功失败),就用谁的结果
Promise.allSettled([...]) 等所有Promise都跑完(不管成功失败),返回每一个的状态和结果,不会因为某个失败就提前结束
Promise.any([...]) 只要有一个成功就返回那个结果;只有全部失败才会reject(和all正好相反的思路)
