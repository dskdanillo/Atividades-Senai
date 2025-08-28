function validaProc() {
    let andar = 6;
    let apartamento = 4;
    let media = 0
    let renda = [];
    let soma = 0;

    for (let i = 0; i < andar; i++) {
        renda[i] = [];

        for (let j = 0; j < apartamento; j++) {
            renda[i][j] = parseFloat(prompt("Insira a renda do apartamento: "));
            console.log("Andar " + (i + 1) + " | apartamento " + (j + 1) + " renda do Apartamento é: " + renda[i][j]);
            soma += renda[i][j];

        }
    }
    media = soma / (andar * apartamento)

    console.log("A renda Somada é: " + soma);

    console.log("A Média da renda do Prédio é: " + media);
    return false;
}
