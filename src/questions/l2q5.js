class Deque {
    constructor(size = 5) {
        this.size = size;
        this.dados = []
        this.head = 0;
        this.tail = 1;
    }

    addFirst(elemento) {
        if(this.isFull()) throw new Error("Deque Overflow");
        this.dados[this.head] = elemento;
        if(this.head === 0) {
            this.head = this.size - 1;
            return;
        }
        this.head--;
    }
    
    addLast(elemento) {
        if(this.isFull()) throw new Error("Deque Overflow");
        this.dados[this.tail] = elemento;
        if(this.tail === this.size - 1) {
            this.tail = 0;
            return;
        }
        this.tail++;
    }
    
    removeFirst() {
        if(this.isEmpty()) throw new Error("Deque Underflow");
        let result = this.dados[this.head + 1];
        if(this.head === this.size - 1) {
            this.head = 0;
        } else {
            this.head++;
        }
        return result;
    }
    
    removeLast() {
        if(this.isEmpty()) throw new Error("Deque Underflow");
        let result = this.dados[this.tail - 1];
        if(this.tail === 0) {
            this.tail = this.size - 1;
        } else {
            this.tail--;
        }
        return result;
    }

    peekFirst() {
        if(this.isEmpty()) throw new Error("Deque Underflow");
        return this.dados[this.head + 1];
    }

    peekLast() {
        if(this.isEmpty()) throw new Error("Deque Underflow");
        return this.dados[this.tail - 1];
    }

    isEmpty() {
        return this.length() === 0;
    }

    isFull() {
        return this.length() === this.size - 2;
    }
    
    length() {
        if(this.head < this.tail) return this.tail - this.head - 1;
        return this.size - this.head + this.tail - 1;
    }

    clear() {
        this.head = 0;
        this.tail = 1;
    }

}

export default Deque;