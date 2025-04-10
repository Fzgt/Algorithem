// 105. 从前序与中序遍历序列构造二叉树
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (inorder.length == 0) return null;
    const root = new TreeNode(preorder[0]);
    const mid = inorder.indexOf(preorder[0]);
    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
    return root;
};

// root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
// root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
// 为什么每次都要同时传两个，比如构建左子树 又要找preorder的左半部分，又要让inorder的左半部分呢？
// 在构建二叉树时，我们需要同时传递前序遍历和中序遍历的相应部分，因为这两种遍历方式提供了不同且互补的信息：

// 前序遍历（根-左-右）告诉我们当前子树的根节点是什么
// 中序遍历（左-根-右）告诉我们如何划分左右子树

// 思路：每次递归，都拿preorder找到root，再通过root找到inorder的中序位置，
// 然后根据中序位置划分左右子树的范围，
// 递归构建左子树和右子树，最后返回根节点。