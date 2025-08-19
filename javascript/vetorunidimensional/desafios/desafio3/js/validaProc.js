function validaProc() {
    let num = [];
    let resultado = [];
    let multiplicador;
    let i;
    let j;

    for (i = 0; i < 5; i++) {
        num[i] = parseInt(prompt("Digite o valor do " + (i + 1) + "º número:"));
        console.log("O número digitado foi: " + num[i]);
    }

    alert("Valores armazenados com sucesso!");

    
    multiplicador = parseInt(prompt("Digite o multiplicador numérico:"));

   
    for (j = 0; j < 5; j++) {
        resultado[j] = multiplicador * num[j];
        console.log("O resultado do vetor na posição " + j + " é: " + resultado[j]);
    }

    return false;
}
