function validaProc() {



    let linha = 4;
    let coluna = 3;
    let valores = [];
    let dobro = [];

    for (let i = 0; i < linha; i++) {
        valores[i] = [];
        dobro[i] = [];

        for (let j = 0; j < coluna; j++) {
            valores[i][j] = parseFloat(prompt("Insira o valor: "));
            console.log("O valor da linha " + (i + 1) + " | coluna " + (j + 1) + " é: " + valores[i][j]);
            dobro[i][j] = valores[i][j] * 2;
        }
    }



    console.log("Valores Originais")
    console.table(valores);
    console.log("Valores Dobrados")
    console.table(dobro);
    return false
}
