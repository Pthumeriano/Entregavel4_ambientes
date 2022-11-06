const Algoritmo = require('./algoritmos');
const algoritmos = new Algoritmo();

describe('Teste unitário: contar inteiros', () => {

    test('Teste 1', () => {

        const teste1 = algoritmos.contarInteiros('1 2 3');
        expect(teste1).toEqual(3);

    });

    test('Teste 2', () => {

        const teste1 = algoritmos.contarInteiros('1.5 2 3.5');
        expect(teste1).toEqual(1);

    });

});