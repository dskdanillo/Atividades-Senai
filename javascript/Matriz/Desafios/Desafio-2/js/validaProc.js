function validaProc() {
   
   
   
    let linha = 4;
    let coluna = 3;
    let valores = [];
    let soma = 0;

    for (let i = 0; i < linha; i++) {
        valores[i] = [];

        for (let j = 0; j < coluna; j++) {
            valores[i][j] = parseFloat(prompt("Insira o valor: "));
            console.log("O valor da linha " + (i + 1) + " | coluna " + (j + 1) + " é: " + valores[i][j]);
            soma += valores[i][j];
        }
    }

    console.log("A soma dos valores é: " + soma);


    console.table(valores);
}
