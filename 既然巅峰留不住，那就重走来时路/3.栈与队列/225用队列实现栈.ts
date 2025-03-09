// 225. 用队列实现栈
class MyStack {
    private queue: number[];
    private _queue: number[];

    constructor() {
        this.queue = [];
        this._queue = [];
    }

    push(x: number): void {
        this.queue.push(x);
    }

    pop(): number {
        while (this.queue.length > 1) {
            this._queue.push(this.queue.shift());
        }
        let ans = this.queue.shift();
        while (this._queue.length) {
            this.queue.push(this._queue.shift());
        }
        return ans;
    }

    top(): number {
        return this.queue.slice(-1)[0];
    }

    empty(): boolean {
        return !this.queue.length;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */