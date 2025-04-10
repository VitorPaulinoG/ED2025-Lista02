import Fila from '../Fila'

const intercalaFilas = (f1, f2) => {
  let size = f1.length() + f2.length();
  let result = new Fila(size + 1);
  
  while(result.length() < size) {
    if(!f1.isEmpty())
        result.enqueue(f1.dequeue());
    if(!f2.isEmpty())
      result.enqueue(f2.dequeue());
  }
  return result;
}

export default intercalaFilas;