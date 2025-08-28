
  function validaProc() {
    let linha = 2;
    let coluna = 2;
    let matriz = [];

    for (let i = 0; i < linha; i++) {
        matriz[i] = [];
        
        
        
        for (let j = 0; j < coluna; j++) {
            matriz[i][j] = i + j;
            console.log("Linha " +i+ " | Coluna " + j + " = " + matriz[i][j]);
        }
    }


}

  

