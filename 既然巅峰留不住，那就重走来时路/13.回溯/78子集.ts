// 78. 子集
function subsets(nums: number[]): number[][] {
    const ans = [];
    const path = [];

    const dfs = startIdx => {
        ans.push(path.slice());

        for (let i = startIdx; i < nums.length; i++) {
            path.push(nums[i]); // 通过for循环分出去多个递归并行，但是栈是单线程的，所以可以共用一个list
            dfs(i + 1);
            path.pop();
        }
    }

    dfs(0);
    return ans;
};

// 多层并行递归想不明白的话，就想象只有一层递归，
// 先push一个值，然后push下一个值，pop掉上一个值，再push下一个值，这样就能想明白了

// function subsets(nums: number[]): number[][] {
//     const ans = [];

//     const dfs = (index, list) => {
//         ans.push(list.slice()); // list引用用来传递的，只把值加到ans
//         for (let i = index; i < nums.length; i++) {
//             list.push(nums[i]); // 通过for循环分出去多个递归并行，但是栈是单线程的，所以可以共用一个list
//             dfs(i + 1, list);
//             list.pop();
//         }
//     }

//     dfs(0, []);
//     return ans;
// };