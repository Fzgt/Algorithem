// 236. 二叉树的最近公共祖先
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    let ans;
    const dfs = (root, p, q) => {
        if (!root) return false;
        const lson = dfs(root.left, p, q);
        const rson = dfs(root.right, p, q);
        if ((lson && rson) || (root.val === p.val || root.val === q.val) && (lson || rson)) {
            ans = root;
        }
        return lson || rson || (root.val === p.val || root.val === q.val);
    }
    dfs(root, p, q);
    return ans;
};


// return lson || rson || (root.val === p.val || root.val === q.val);
// lson - 表示左子树中是否包含p或q。如果左子树递归调用返回true，说明左子树中找到了p或q。
// rson - 表示右子树中是否包含p或q。如果右子树递归调用返回true，说明右子树中找到了p或q
// (root.val === p.val || root.val === q.val) - 检查当前节点自身是否就是p或q
// 这个返回值向上传递信息，告诉父节点"我这个子树中有目标节点"

// if ((lson && rson) || ((root.val === p.val || root.val === q.val) && (lson || rson))) {
// lson && rson 表示左子树和右子树都返回true
// (root.val === p.val || root.val === q.val) 检查当前节点是否为p或q
// (lson || rson) 检查是否在其子树中找到了另一个目标节点
// 当这两个条件同时满足时，当前节点也是LCA