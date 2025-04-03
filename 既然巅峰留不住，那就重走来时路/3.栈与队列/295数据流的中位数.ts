// 295. 数据流的中位数
class MedianFinder {
    private left;
    private right;

    constructor() {
        this.left = new MaxPriorityQueue();
        this.right = new MinPriorityQueue();
    }

    addNum(num: number): void {
        if (this.left.size() === this.right.size()) {
            this.right.enqueue(num);
            this.left.enqueue(this.right.dequeue());
        } else {
            this.left.enqueue(num);
            this.right.enqueue(this.left.dequeue());
        }
    }

    findMedian(): number {
        if (this.left.size() > this.right.size()) {
            return this.left.front();
        }
        return (this.left.front() + this.right.front()) / 2;
    }
}