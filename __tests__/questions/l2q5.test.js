import Deque from "../../src/questions/l2q5";

let deque;

beforeEach(() => {
deque = new Deque();
});

test('deve adicionar elementos no início corretamente', () => {
    deque.addFirst(1);
    deque.addFirst(2);
    expect(deque.peekFirst()).toBe(2);
    expect(deque.peekLast()).toBe(1);
});

test('deve adicionar elementos no final corretamente', () => {
    deque.addLast(1);
    deque.addLast(2);
    expect(deque.peekFirst()).toBe(1);
    expect(deque.peekLast()).toBe(2);
});

test('deve remover elementos do início corretamente', () => {
    deque.addLast(1);
    deque.addLast(2);
    expect(deque.removeFirst()).toBe(1);
    expect(deque.peekFirst()).toBe(2);
});

test('deve remover elementos do final corretamente', () => {
    deque.addLast(1);
    deque.addLast(2);
    expect(deque.removeLast()).toBe(2);
    expect(deque.peekLast()).toBe(1);
});

test('deve lançar erro ao tentar remover de um deque vazio', () => {
    expect(() => deque.removeFirst()).toThrow('Deque Underflow');
    expect(() => deque.removeLast()).toThrow('Deque Underflow');
});

test('deve lançar erro ao tentar adicionar em um deque cheio', () => {
    for (let i = 0; i < 3; i++) {
        deque.addLast(i);
    }
    expect(() => deque.addLast(4)).toThrow('Deque Overflow');
    expect(() => deque.addFirst(4)).toThrow('Deque Overflow');
});

test('deve limpar o deque corretamente', () => {
    deque.addLast(1);
    deque.addLast(2);
    deque.clear();
    expect(deque.isEmpty()).toBe(true);
});

test('deve calcular o tamanho corretamente', () => {
    expect(deque.length()).toBe(0);
    deque.addLast(1);
    expect(deque.length()).toBe(1);
    deque.addFirst(2);
    expect(deque.length()).toBe(2);
    deque.removeLast();
    expect(deque.length()).toBe(1);
});

test('deve adicionar e remover do início corretamente', () => {
    const deque = new Deque();
    deque.addFirst(1);
    deque.addFirst(2);
    expect(deque.removeFirst()).toBe(2); 
});

test('deve lidar corretamente com múltiplas operações', () => {
    const deque = new Deque(5);
    deque.addLast(1);
    deque.addLast(2);
    deque.addLast(3);
    expect(deque.removeFirst()).toBe(1);
    expect(deque.removeFirst()).toBe(2);
    deque.addLast(4);
    deque.addLast(5);
    expect(deque.length()).toBe(3);
    expect(deque.isFull()).toBe(true);    
    expect(() => deque.addLast(6)).toThrow("Deque Overflow");
});