import Pilha from "../Pilha";

class Fila {
  constructor (size = 5) {
    this.size = size;
    this.dados = new Pilha(size);
    this.pilhaAux = new Pilha(size);
  }

  enqueue(elemento) {
    if(this.isFull()) throw new Error("Queue Overflow");
    this.dados.push(elemento);
  }
  
  dequeue() {
    if(this.isEmpty()) throw new Error("Queue Underflow");
    
    while(this.length() > 1) {
      this.pilhaAux.push(this.dados.pop());
    }
    let result = this.dados.pop();
    while(!this.pilhaAux.isEmpty()){
      this.dados.push(this.pilhaAux.pop());
    }
    return result;
  }
  
  front() {
    if(this.isEmpty()) throw new Error("Queue Underflow");

    let result;
    while(!this.dados.isEmpty()) {
      result = this.dados.pop();
      this.pilhaAux.push(result);
    }
    while(!this.pilhaAux.isEmpty()) {
      this.dados.push(this.pilhaAux.pop());
    }
    return result;
  }

  isEmpty() {
    return this.length() === 0;
  }

  isFull() {
    return this.length() === this.size;
  }

  clear() {
    this.dados.clear();
    this.pilhaAux.clear();
  }

  length() {
    return this.dados.length();
  }

  toString() {
    let result = "";
    for(let char of this.dados.toString()) {
      result = char + result;
    }
    return result;
  }
}

export default Fila;