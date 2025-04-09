import Fila from "../Fila";

class Pilha {
  constructor(size = 5) {
    this.size = size
    this.dados = new Fila(size + 1);
    this.filaAux = new Fila(size + 1);
  }

  push(elemento) {
    if(this.isFull()) throw new Error("Stack Overflow");
    this.dados.enqueue(elemento)
  }
  
  pop() {
    if(this.isEmpty()) throw new Error("Stack Underflow");
    while(this.length() > 1) {
      this.filaAux.enqueue(this.dados.dequeue());
    }
    let result = this.dados.dequeue();
    while(!this.filaAux.isEmpty()) {
      this.dados.enqueue(this.filaAux.dequeue());
    }
    return result;
  }

  peek() {
    let result;
    while(!this.isEmpty()) {
      result = this.dados.dequeue();
      this.filaAux.enqueue(result);
    }
    while(!this.filaAux.isEmpty()) {
      this.dados.enqueue(this.filaAux.dequeue());
    }
    return result;
  }
  
  length() {
    return this.dados.length();
  }

  isEmpty() {
    return this.length() === 0;
  }
  
  isFull() {
    return this.length() === this.size;
  }
  clear() {
    this.dados.clear();
  }

  toString() {
  }
}
export default Pilha;