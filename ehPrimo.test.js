const Algoritmo = require('./algoritmos');
const algoritmos = new Algoritmo();

describe('Teste unitário: é primo ou não', () => {

    test('Teste 1', () => {

        const teste1 = algoritmos.ehPrimo(7);
        expect(teste1).toEqual(true);

    });

    test('Teste 2', () => {

        const teste2 = algoritmos.ehPrimo(8);
        expect(teste2).toEqual(false);

    });

});