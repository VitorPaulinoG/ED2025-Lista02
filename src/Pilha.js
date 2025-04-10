class Pilha {
    constructor (size = 5) {
      this.dados = [];
      this.size = size;
      this.top = 0;
    }
  
    push(elemento) {
      if(this.isFull()) throw new Error("Stack Overflow");
  
      this.dados[this.top] = elemento;
      this.top++;
    }
    
    pop() {
      if(this.isEmpty()) throw new Error("Stack Underflow");
  
      let result = this.peek();
      this.top--;
      return result;
    }
  
    peek() {
      if(this.isEmpty()) throw new Error("Stack Underflow");
  
      return this.dados[this.top - 1];
    }
    
    length() {
      return this.top;
    }
  
    isEmpty() {
      return this.length() === 0;
    }
    
    isFull() {
      return this.length() === this.size;
    }
    clear() {
      this.top = 0;
    }
  
    toString() {
      let result = '';
      for (let i = this.length() - 1; i >= 0; i--) {
        result += this.dados[i] + ' ';
      }
      return result.trim();
    }
    
  
  }
  
  export default Pilha;