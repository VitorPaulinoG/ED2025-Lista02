import Fila from "../../src/Fila";
import intercalaFilas from "../../src/questions/l2q4";

let f1;
let f2;
beforeEach(() => {
    f1 = new Fila();
    
    f1.enqueue('A');
    f1.enqueue('C');
    f1.enqueue('E');
    f1.enqueue('G');
    
    f2 = new Fila();

    f2.enqueue('B');
    f2.enqueue('D');
    f2.enqueue('F');
    f2.enqueue('H');
});

test("Deve intercalar os elementos", () => {
    let result = intercalaFilas(f1, f2);
    expect(result.toString()).toBe("A B C D E F G H");

})