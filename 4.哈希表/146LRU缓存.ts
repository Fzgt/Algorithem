// 146. LRU缓存
class LRUCache {
    private capacity: number;
    private map: Map<number, number>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.map = new Map();
    }

    get(key: number): number {
        if (this.map.has(key)) {
            let value = this.map.get(key);
            this.map.delete(key);
            this.map.set(key, value);
            return value;
        } else {
            return -1;
        }
    }

    put(key: number, value: number): void {
        if (this.map.has(key)) {
            this.map.delete(key);
        }
        this.map.set(key, value);
        if (this.map.size > this.capacity) {
            this.map.delete(this.map.keys().next().value)
        }
    }
}