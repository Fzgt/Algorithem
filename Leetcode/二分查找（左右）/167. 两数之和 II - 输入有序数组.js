/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let left = 0, right = numbers.length - 1;
    let sum;
    while (left < right) {
        sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1]  //注意题目要求的索引从1开始
        } else if (sum < target) {
            left++
        } else if (sum > target) {
            right--;
        }
    }
    return [-1, -1]
};