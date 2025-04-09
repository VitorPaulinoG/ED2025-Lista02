import Pilha from "../../src/questions/l2q1";

let p;

beforeEach(() => {
  p = new Pilha();
});

test("A pilha iniciar vazia", () => {
  expect(p.isEmpty()).toBe(true);
  expect(p.length()).toBe(0);
  expect(() => p.pop()).toThrow("Stack Underflow");
})

test("A pilha deve ficar cheia com 5 elementos", () => {
  p.push("A");
  p.push("B");
  p.push("C");
  p.push("D");
  p.push("E");
  expect(p.isFull()).toBe(true);
  expect(p.length()).toBe(5);
  expect(() => p.push()).toThrow("Stack Overflow");
  expect(p.peek()).toBe("E");
})

