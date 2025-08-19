function validaProc() {
    let alunos= 5;
    let notasPorAluno= 2;
    let media=[];
    let i
    let soma= 0
    let j;
    let nota

    for (i = 0; i < alunos; i++) {
    soma = 0

        for (j = 0; j < notasPorAluno; j++) {
            nota = parseFloat(prompt("Digite a " + (j + 1) + "ª nota do " + (i + 1) + "º aluno:"));
            soma += nota;
        }

                     media[i] = soma / notasPorAluno;
                     console.log("A média do " + (i + 1) + "º aluno é: " + media[i]);
    }

    return false;
}
