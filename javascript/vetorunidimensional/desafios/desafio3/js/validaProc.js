function validaProc() {
    let num = [];
    let resultado = [];
    let multiplicador;
    let i;

    
    for (i = 0; i < 5; i++) {
        num[i] = parseInt(prompt("Digite o valor do " + (i + 1) + "º número:"));
        console.log("O número digitado foi: " + num[i]);
    }

                        alert("Valores armazenados com sucesso!");

    
    multiplicador = parseInt(prompt("Digite o multiplicador numérico:"));

   
    for (i = 0; i < 5; i++) {
        
        resultado[i] = multiplicador * num[i];
        console.log("O resultado do vetor na posição " + i + " é: " + resultado[i]);
    }

    return false;
}
