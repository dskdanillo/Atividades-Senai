function validaProc() {
    let linha = 2;
    let coluna = 2;
    let matriz = [];
    let soma = 0;


    for (let i = 0; i < linha; i++) {
        matriz[i] = [];
        for (let j = 0; j < coluna; j++) {
            matriz[i][j] = parseInt(prompt("Digite o valor da posição " +i+ " | " +j+ ":"));
            console.log("O valor digitado para a posição " + i + " | " +j+ " foi: " + matriz[i][j]);
        }
    }

 
    let linhaEscolhida = parseInt(prompt("Digite o número da linha que deseja somar (0 ou 1):"));

    if (linhaEscolhida >= 0 && linhaEscolhida < linha) {
        soma = 0;
        for (let j = 0; j < coluna; j++) {
            soma += matriz[linhaEscolhida][j];
        }

        alert("A soma dos elementos da linha " + linhaEscolhida + " é: " + soma);
        console.log("A soma dos elementos da linha " + linhaEscolhida + " é: " + soma);
    } else {
        alert("Linha inválida! Digite 0 ou 1. Recomece!!!");
    }

    return false;
}
