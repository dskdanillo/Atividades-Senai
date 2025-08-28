function validaProc() {
        let linha = 2;
        let coluna = 3;
        let matriz = [];
    
    
    
        for (let i = 0; i < linha; i++) {
            matriz[i] = [];
            for (let j = 0; j < coluna; j++) {
                matriz[i][j] = parseInt(prompt("Digite o valor da posição " +i+ " | " +j+ ": "));
                console.log("O valor digitado para a posição " + i + " | " +j+ " foi: " + matriz[i][j]);
               
            }
        }
    
        console.table(matriz);
        return false;
    }
    



