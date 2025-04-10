import Fila from "../../src/Fila";
import reverteFila from "../../src/questions/l2q6";

let f;

beforeEach(() => {
    f = new Fila(6);
})

test("Deve reverter a fila", () => {
    f.enqueue("A");
    f.enqueue("B");
    f.enqueue("C");
    f.enqueue("D");
    f.enqueue("E");
    let result = reverteFila(f, new Fila(f.size));
    expect(result.front()).toBe("E");
    expect(result.toString()).toBe("E D C B A");
})