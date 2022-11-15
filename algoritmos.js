class Algoritmo {
    //separados por espaço
    somatorio(listaTermos) {
        if (typeof(listaTermos) == 'string') {
            let soma = 0;
            //separando por espaco
            let termos = listaTermos.split(' ');
            for (let i = 0; i < termos.length; i++) {
                try {
                    soma += parseInt(termos[i]);
                } catch (error) {

                }
            }
            return soma;
        }
        return 0;
    }

    ehPrimo(numero) {
        if (typeof(numero) == 'number') {
            //todos os numeros sao divisiveis por 1 e por ele mesmo
            //basta testar se o numero é divisivel por qualquer outro
            for (let i = 2; i < numero; i++) {
                if (numero % i == 0) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    //o valor do proximo é anterior + atual
    gerarFibonacci(qtdTermos) {

        if (typeof(qtdTermos) == 'number') {

            let anterior = 0;
            let atual = 0;
            let proximo = 1;
            let resultado = "";
            for (let i = 0; i < qtdTermos; i++) {
                resultado += atual + " ";
                anterior = atual;
                atual = proximo;
                proximo = atual + anterior
            }
            return resultado;
        }

        return "";

    }

    maximoDivisorComum(numero1, numero2) {
        if (typeof(numero1) && typeof(numero2) == 'number') {
            //todo numero é divisivel por 1
            let maxDivComum = 1;

            if (numero1 < numero2) {
                let varAuxiliar = numero1;
                numero1 = numero2;
                numero2 = varAuxiliar;
            }
            //quando achar, encerra o for
            for (let i = numero1; i > 1; i--) {
                if (numero1 % i == 0 && numero2 % i == 0) {
                    maxDivComum = i;
                    break;
                }
            }
            return maxDivComum;
        }
        return 0;
    }

    contarInteiros(numeros) {
        if (typeof(numeros) == 'string') {
            //separando por espaço
            let numerosSeparados = numeros.split(' ');
            let contador = 0;
            //se a parte inteira - o numero for = 0
            for (let i = 0; i < numerosSeparados.length; i++) {
                try {
                    if ((parseFloat(numerosSeparados[i]) - parseInt(numerosSeparados[i])) == 0) {
                        contador++;
                    }

                } catch (error) {

                }
            }
            return contador;
        }
        return "";

    }

    ordenar(entrada) {
        if (typeof(entrada) == 'string') {
            //separando os numeros por espaço
            let vetor = entrada.split(' ');

            for (let i = 0; i < vetor.length - 1; i++) {
                for (let j = 0; j < vetor.length - 1; j++) {
                    try {
                        if (parseInt(vetor[j]) > parseInt(vetor[j + 1])) {
                            let varAuxiliar = vetor[j];
                            vetor[j] = vetor[j + 1];
                            vetor[j + 1] = varAuxiliar;
                        }
                    } catch (error) {

                    }
                }
            }

            //recriando em string
            let saida = "";
            for (let i = 0; i < vetor.length; i++) {
                saida += vetor[i] + " ";
            }
            return saida;
        }
        return "";
    }
}

module.exports = Algoritmo;