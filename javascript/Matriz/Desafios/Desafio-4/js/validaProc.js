function validaProc() {



    let linha = 4;
    let coluna = 3;
    let valores = [];
    let somaLinha = [];
    let somaTotal = 0

    for (let i = 0; i < linha; i++) {
        valores[i] = [];
       somaLinha[i]= 0
       

        for (let j = 0; j < coluna; j++) {
            valores[i][j] = parseFloat(prompt("Insira o valor: "));
            console.log("O valor da linha " + (i + 1) + " | coluna " + (j + 1) + " é: " + valores[i][j]);
            
            somaLinha[i] += valores[i][j]
            somaTotal +=valores[i][j]
        }
        console.log("o valor é: "+somaLinha[i]);
       
    }
    
    console.log("o valor é: "+somaTotal);
    return false


}
