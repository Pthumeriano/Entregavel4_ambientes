const Algoritmo = require('./algoritmos');
const algoritmos = new Algoritmo();

describe('Teste unitário: ordenar', () => {

    test('Teste 1', () => {

        const teste1 = algoritmos.ordenar('1 9 6 7 5 0 3');
        expect(teste1).toEqual('0 1 3 5 6 7 9 ');

    });

    test('Teste 2', () => {

        const teste1 = algoritmos.ordenar('9 8 7 6 5 4 3 2 1');
        expect(teste1).toEqual('1 2 3 4 5 6 7 8 9 ');

    });

});