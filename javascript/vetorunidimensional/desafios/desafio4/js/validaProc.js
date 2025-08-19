function validaProc() {

    let num = [];

   

    for (let i = 0; i < 4; i++) {

        num[i] = parseInt(prompt("Digite os valores do " + i + " º vetor"));
        console.log("Número do " + i + " º Vetor é: " + num[i]);


    } alert("Preenchimento Completo");



    for (let i = 3; i >= 0; i--) {
        console.log("Número em ordem inversa " +i+ ": " + num[i]);

    }

    return false;
}