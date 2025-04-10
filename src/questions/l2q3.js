import Fila from "../Fila";

class AtendimentoDeCaminhao {
    constructor(capacidade = 10) {
        this.capacidade = capacidade + 1;
        this.fila = new Fila(this.capacidade);
    }

    receberCaminhoneiro(caminhoneiro) {
        this.fila.enqueue(caminhoneiro);
    }

    atenderCaminhoneiro() {
        return this.fila.dequeue();
    }

    possuiCaminhoneirosNoAguardo() {
        return this.fila.length() > 0;
    }

    caminhoesNoAguardo() {
        return this.fila.length();
    }

    esgotou() {
        return this.fila.isFull();
    }

}

export default AtendimentoDeCaminhao;