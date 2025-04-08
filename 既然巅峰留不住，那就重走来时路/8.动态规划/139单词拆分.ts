// 139. 单词拆分
function wordBreak(s: string, wordDict: string[]): boolean {
    const n = s.length;
    const wordDictSet: Set<string> = new Set(wordDict); // 将单词列表转换为Set以便快速查找
    const dp: Array<boolean> = new Array(n + 1).fill(false); // DP数组，dp[i]表示s的前i个字符能否被拆分

    dp[0] = true;                                      // 空字符串可以被拆分（作为base case）

    for (let i = 1; i <= n; i++) {                     // 遍历字符串s的每个位置
        for (let j = 0; j < i; j++) {                  // 遍历dp数组的前i个位置, j表示从0-j截取，可以在字典里找到
            if (dp[j] && wordDictSet.has(s.substring(j, i))) { // dp[j]为true说明0-j在字典中，且j-i的子串在字典中
                dp[i] = true;                          // 满足条件，就标记dp[i]为true
                break;                                 // dp[i]为true即可break，表明有一种拆分方式
            }
        }
    }

    return dp[n];                                      // 返回整个字符串是否可拆分
}


// 状态定义：dp[i] 表示字符串 s 的前 i 个字符能否被拆分成字典中的单词。
// 初始状态：dp[0] = true，表示空字符串可以被拆分（这是一个基本情况，用于启动DP过程）。
// 状态转移方程：
// Copydp[i] = dp[j] && wordDictSet.has(s.substring(j, i)) 对某个 j∈[0,i)
// 这意味着：前i个字符能被拆分，当且仅当存在某个位置j，使得：

// 前j个字符能被拆分（dp[j]=true）
// 从位置j到位置i-1的子串是字典中的单词


// 最终结果：dp[n] 表示整个字符串是否可以拆分。

// 算法执行过程示例
// 以 s = "leetcode", wordDict = ["leet", "code"] 为例：

// 初始化：dp[0] = true（空串可拆分）
// i=1, s[0:0]="l"：

// j=0: dp[0]=true，但"l"不在字典中
// dp[1] = false


// i=2, s[0:1]="le"：

// j=0: dp[0]=true，但"le"不在字典中
// dp[2] = false


// i=3, s[0:2]="lee"：

// j=0: dp[0]=true，但"lee"不在字典中
// dp[3] = false


// i=4, s[0:3]="leet"：

// j=0: dp[0]=true，且"leet"在字典中
// dp[4] = true


// i=5, s[0:4]="leetc"：

// j=0: dp[0]=true，但"leetc"不在字典中
// j=4: dp[4]=true，但"c"不在字典中
// dp[5] = false


// ...
// i=8, s[0:7]="leetcode"：

// j=4: dp[4]=true，且"code"在字典中
// dp[8] = true


// 最终返回 dp[8] = true。