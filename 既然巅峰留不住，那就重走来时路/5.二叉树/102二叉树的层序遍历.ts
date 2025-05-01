// 102. 二叉树的层序遍历  BFS
function levelOrder(root: TreeNode | null): number[][] {
    const ans: number[][] = [];

    if (!root) return ans;

    const queue: TreeNode[] = [root];

    while (queue.length !== 0) {

        const curLevelSize = queue.length;
        ans.push([]);


        for (let i = 0; i < curLevelSize; i++) { // 遍历当前层的所有节点，并把下一层的节点放入队列

            const node = queue.shift();
            ans[ans.length - 1].push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return ans;
};