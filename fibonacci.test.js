const Algoritmo = require('./algoritmos');
const algoritmos = new Algoritmo();

describe('Teste unitário: sequencia fibonacci', () => {

    test('Teste 1', () => {

        const teste1 = algoritmos.gerarFibonacci(7);
        expect(teste1).toEqual('0 1 1 2 3 5 8 ');

    });

    test('Teste 2', () => {

        const teste1 = algoritmos.gerarFibonacci(1);
        expect(teste1).toEqual('0 ');

    });

});