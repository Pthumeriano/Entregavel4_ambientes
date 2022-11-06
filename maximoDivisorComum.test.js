const Algoritmo = require('./algoritmos');
const algoritmos = new Algoritmo();

describe('Teste unitário: mdc', () => {

    test('Teste 1', () => {

        const teste1 = algoritmos.maximoDivisorComum(1, 2);
        expect(teste1).toEqual(1);

    });

    test('Teste 2', () => {

        const teste1 = algoritmos.maximoDivisorComum(20, 24);
        expect(teste1).toEqual(4);

    });

});