function cadastrarApartamentos() {
    let qtdeAptos = parseInt(document.getElementById("qtdeAptos").value);
    let quartos = 3;
    let apartamentos = [];
    let totalSalarios = 0;
    let maiorSalario = 0;
    let totalMoradores = qtdeAptos * quartos;

    // Preenchendo a matriz com salários
    for (let i = 0; i < qtdeAptos; i++) {
        apartamentos[i] = [];

        for (let j = 0; j < quartos; j++) {
            let salario = parseFloat(prompt(`Digite o salário do morador do apartamento ${i + 1}, quarto ${j + 1}:`));
            
            // Validação básica
            while (isNaN(salario) || salario < 0) {
                salario = parseFloat(prompt(`Salário inválido! Digite novamente o salário do morador do apartamento ${i + 1}, quarto ${j + 1}:`));
            }

            apartamentos[i][j] = salario;

            // Soma para média
            totalSalarios += salario;

            // Verifica maior salário
            if (salario > maiorSalario) {
                maiorSalario = salario;
            }
        }
    }

    let mediaSalarios = totalSalarios / totalMoradores;

    // Exibindo os dados com document.write
    document.write("<h2>Relatório de Cadastro</h2>");
    document.write("<h3>Salários por apartamento:</h3>");

    for (let i = 0; i < qtdeAptos; i++) {
        document.write(`<strong>Apartamento ${i + 1}:</strong> `);
        for (let j = 0; j < quartos; j++) {
            document.write(`R$ ${apartamentos[i][j].toFixed(2)} &nbsp;&nbsp;`);
        }
        document.write("<br>");
    }

    document.write("<hr>");
    document.write(`<p><strong>Maior salário do prédio:</strong> R$ ${maiorSalario.toFixed(2)}</p>`);
    document.write(`<p><strong>Média salarial do prédio:</strong> R$ ${mediaSalarios.toFixed(2)}</p>`);
}
