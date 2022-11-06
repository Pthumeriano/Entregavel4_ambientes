class Algoritmo {
    //separados por espaço
    somatorio(listaTermos) {
        let soma = 0;
        //separando por espaco
        let termos = listaTermos.split(' ');
        for (let i = 0; i < termos.length; i++) {
            soma += parseInt(termos[i]);
        }
        return soma;
    }

    ehPrimo(numero) {
        //todos os numeros sao divisiveis por 1 e por ele mesmo
        //basta testar se o numero é divisivel por qualquer outro
        for (let i = 2; i < numero; i++) {
            if (numero % i == 0) {
                return false;
            }
        }
        return true;
    }

    //o valor do proximo é anterior + atual
    gerarFibonacci(qtdTermos) {
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

    maximoDivisorComum(numero1, numero2) {
        //todo numero é divisivel por 1
        let mdc = 1;

        if (numero1 < numero2) {
            let aux = numero1;
            numero1 = numero2;
            numero2 = aux;
        }
        //quando achar, encerra o for
        for (let i = numero1; i > 1; i--) {
            if (numero1 % i == 0 && numero2 % i == 0) {
                mdc = i;
                break;
            }
        }
        return mdc;
    }

    contarInteiros(numeros) {
        //separando por espaço
        let numerosSeparados = numeros.split(' ');
        let contador = 0;
        //se a parte inteira - o numero for = 0
        for (let i = 0; i < numerosSeparados.length; i++) {
            if ((parseFloat(numerosSeparados[i]) - parseInt(numerosSeparados[i])) == 0) {
                contador++;
            }
        }
        return contador;
    }

    ordenar(entrada) {
        //separando os numeros por espaço
        let vetor = entrada.split(' ');

        for (let i = 0; i < vetor.length - 1; i++) {
            for (let j = 0; j < vetor.length - 1; j++) {
                if (parseInt(vetor[j]) > parseInt(vetor[j + 1])) {
                    let aux = vetor[j];
                    vetor[j] = vetor[j + 1];
                    vetor[j + 1] = aux;
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
}

module.exports = Algoritmo;