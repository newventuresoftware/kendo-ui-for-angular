class Stack<T> {
    data: T[];

    constructor() {
        this.data = [];
    }

    push(item: T) {
        this.data.push(item);
    }

    pop(): T {
        return this.data.pop();
    }

    peek(): T {
        if(this.data.length)
            return this.data[this.data.length - 1];

        return null;
    }

    size() {
        return this.data.length;
    }
}
