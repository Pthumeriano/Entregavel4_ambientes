//separados por espaço
function somatorio(listaTermos){
    let soma = 0;
    //separando por espaco
    let termos = listaTermos.split(' ');
    for(let i=0; i<termos; i++){
        soma += termos[i];
    }
    return soma;
}

function ehPrimo(numero){
    //todos os numeros sao divisiveis por 1 e por ele mesmo
    //basta testar se o numero é divisivel por qualquer outro
    for(let i=2; i<numero; i++){
        if(numero%i==0){
            return false;
        }
    }
    return true;
}

function gerarFibonacci(qtdTermos){
    let anterior = 0;
    let atual = 0;
    let proximo = 1;
    let resultado = "";
    for(let i=0; i < qtdTermos; i++){
        resultado += atual + " ";
        anterior = atual;
        atual = proximo;
        proximo = atual + anterior
    }
    return resultado;
}
