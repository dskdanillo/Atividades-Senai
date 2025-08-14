function validaProc() {
    let idadeM = 0;
    let idadeF = 0;
    let salarioMasculino = 0;
    let salarioFeminino = 0;
    let somasalarioM = 0;
    let somaSalarioF = 0;
    let somaGrupoSalario = 0;
    let contador = 0;
    let contadorM = 0;
    let contadorF = 0;
    let somaIdadeM = 0;
    let somaIdadeF = 0;
    
    let finalizar = "";
   
    let sexo
    let mediaSalarioGrupo
    let somaIdade
    let mediaIdade

    alert("Olá");

    do {
        contador++;
        sexo = parseInt(prompt("Qual seu gênero? (1- Masculino <> 2- Feminino)"));

        switch (sexo) {
            case 1:
                idadeM = parseInt(prompt("Insira sua Idade: "));
                console.log("Idade digitada: "+idadeM)
                salarioMasculino = parseFloat(prompt("Insira seu Salário: "));
                console.log("Salário digitado: "+salarioMasculino)
                                
                                somaIdadeM += idadeM;
                                somasalarioM += salarioMasculino;
                                contadorM++;
                break;

            case 2:
                idadeF = parseInt(prompt("Insira sua Idade: "));
                console.log("Idade digitada: "+idadeF)
                salarioFeminino = parseFloat(prompt("Insira seu Salário: "));
                console.log("Salário digitado: "+salarioFeminino)
                               
                                somaIdadeF += idadeF;
                                somaSalarioF += salarioFeminino;
                                contadorF++;
                break;

            
        }

        finalizar = prompt("Pressione ENTER para continuar ou digite 'finalizar' para encerrar");

    } while (finalizar !== "finalizar");

                        somaGrupoSalario = somasalarioM + somaSalarioF;
                        mediaSalarioGrupo = somaGrupoSalario / contador;
                        somaIdade = somaIdadeM + somaIdadeF;
                        mediaIdade = somaIdade / contador;

                                console.log("Soma total dos salário: "+somaGrupoSalario);
                                console.log("Total de pessoas avaliadas:", contador);
                                console.log("Média de salário do grupo:", mediaSalarioGrupo);
                                console.log("Média de idade do grupo:", mediaIdade);


 }


