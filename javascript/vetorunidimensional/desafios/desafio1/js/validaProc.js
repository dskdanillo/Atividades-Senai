function validaProc() {
    let notaPrimeiraAlunos = [];
    let notaSegundaAlunos = [];
    let media = [];
            


    for (let i = 0; i < 5; i++) {
 
        notaPrimeiraAlunos[i] = parseFloat(prompt("Digite a 1ª nota do " + (i + 1) + "º aluno:"));

    
        notaSegundaAlunos[i] = parseFloat(prompt("Digite a 2ª nota do " + (i + 1) + "º aluno:"));


        let soma = notaPrimeiraAlunos[i] + notaSegundaAlunos[i];
        media[i] = soma / 2;

        console.log("A média do " + (i + 1) + "º aluno é: " + media[i]);
    }

    alert("Cálculo das médias concluído! So curtir as férias");
    return false;
}
