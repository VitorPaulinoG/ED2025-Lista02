class Fila {
  constructor(size = 5) {
    this.size = size;
    this.dados = [];
    this.start = 0;
    this.end = 0;
  }

  enqueue(elemento) {
    if(this.isFull()) throw new Error("Queue Overflow");
    this.dados[this.end] = elemento;
    if(this.end === this.size - 1) {
      this.end = 0;
      return;
    }

    this.end++;
  }

  dequeue() {
    if(this.isEmpty()) throw new Error("Queue Underflow");
    let result = this.front();
    if(this.start === this.size - 1) {
      this.start = 0;
    } else {
      this.start++;
    }
    return result;
  }

  front() {
    if(this.isEmpty()) throw new Error("Queue Underflow");
    return this.dados[this.start];
  }

  isEmpty() {
    return this.length() === 0;
  }
  isFull() {
    return this.length() === this.size - 1;
  }
  clear() {
    this.start = 0;
    this.end = 0;
  }
  length() {
    if(this.start <= this.end) return this.end - this.start;
    return this.size - this.start + this.end;
  }
  toString() {
    let result = '';
    for (let i = this.start; i < this.start + this.length(); i++) {
      result += this.dados[i % this.size] + ' ';
    }
    return result.trim();
  }
}
export default Fila;