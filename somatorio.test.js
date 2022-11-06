const Algoritmo = require('./algoritmos');
const algoritmos = new Algoritmo();

describe('Teste unitário: somar sequencia de numeros', () => {

    test('Teste 1', () => {

        const teste1 = algoritmos.somatorio('1 1');
        expect(teste1).toEqual(2);

    });

    test('Teste 2', () => {

        const teste1 = algoritmos.somatorio('1 1 1 7');
        expect(teste1).toEqual(10);

    });

});