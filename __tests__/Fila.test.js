import Fila from "../src/Fila";

let f;

beforeEach(() => {
  f = new Fila();
});

test("A fila deve iniciar vazia", () => {
  expect(f.isEmpty()).toBe(true);
  expect(f.length()).toBe(0);
  expect(() => f.dequeue()).toThrow("Queue Underflow");
});

test("Enqueue e Dequeue deve adicionar e remover elementos na fila respectivamente", () => {
  f.enqueue("A");
  f.enqueue("B");
  f.enqueue("C");
  f.enqueue("D");
  expect(f.front()).toBe("A");
  expect(f.length()).toBe(4);
  expect(f.toString()).toBe("A B C D");
  expect(f.isEmpty()).toBe(false);
  f.dequeue()
  expect(f.length()).toBe(3);
  expect(f.front()).toBe("B");
});

test("A fila deve enxer quando adicionados 4 elementos", () => {
  f.enqueue("A");
  f.enqueue("B");
  f.enqueue("C");
  f.enqueue("D");
  expect(f.isFull()).toBe(true);
  expect(() => f.enqueue("E")).toThrow("Queue Overflow");
});



test("A fila deve ser circular", () => {
  f.enqueue("A");
  f.enqueue("B");
  f.enqueue("C");
  f.enqueue("D");
  f.dequeue();
  f.dequeue();
  f.enqueue("E");
  f.enqueue("F");
  console.log(f.dados);
  console.log(f.length());
  expect(f.toString()).toBe("C D E F")
});

