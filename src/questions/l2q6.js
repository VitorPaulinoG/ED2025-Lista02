const reverteFila = (fila, result) => {
    if(fila.length() === 1) {
        result.enqueue(fila.dequeue());
        return result;
    }

    let elemento = fila.dequeue();
    let r = reverteFila(fila, result);
    r.enqueue(elemento);
    return r;
}

export default reverteFila;