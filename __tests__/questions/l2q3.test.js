import AtendimentoDeCaminhao from "../../src/questions/l2q3";


let atendimento;

beforeEach(() => {
    atendimento = new AtendimentoDeCaminhao();
})

test("Deve iniciar sem caminhoneiros", () => {
    expect(atendimento.possuiCaminhoneirosNoAguardo()).toBe(false);
    expect(atendimento.caminhoesNoAguardo()).toBe(0);
    expect(() => atendimento.atenderCaminhoneiro()).toThrow("Queue Underflow");
})

test("Deve receber no máximo 10 caminhoneiros", () => {
    atendimento.receberCaminhoneiro("A");
    atendimento.receberCaminhoneiro("B");
    atendimento.receberCaminhoneiro("C");
    expect(atendimento.caminhoesNoAguardo()).toBe(3);
    expect(atendimento.possuiCaminhoneirosNoAguardo()).toBe(true);
    atendimento.receberCaminhoneiro("D");
    atendimento.receberCaminhoneiro("E");
    atendimento.receberCaminhoneiro("F");
    atendimento.receberCaminhoneiro("G");
    atendimento.receberCaminhoneiro("H");
    atendimento.receberCaminhoneiro("I");
    atendimento.receberCaminhoneiro("J");
    expect(atendimento.esgotou()).toBe(true);
    expect(atendimento.caminhoesNoAguardo()).toBe(10);
    expect(() => atendimento.receberCaminhoneiro("K")).toThrow("Queue Overflow");
    atendimento.atenderCaminhoneiro();
})