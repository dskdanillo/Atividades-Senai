function validaProc(){


let media
let idadeM
let idadeF
let mediaIdade
let salarioMasculino
let salarioFeminino
let salario 
let sexo
let somasalarioM
let somaSalarioF
let somaGrupoSalario
let contador=0
let contadorM
let contadorF

alert("Olá")

    do{
        contador++
        sexo = parseInt(prompt("Qual seu genero?: (1- Masculino | 2- Feminino"));
        switch(sexo){

            case 1: 
                 idadeM = parseInt(pront("Insira sua Idade: "));
                 salarioMasculino= parseFloat(pront("Insira seu Sálario: "));
                 somasalarioM += salarioMasculino
                 contadorM++
                 return false
                
            case 2: 
                 idadeF = parseInt(pront("Insira sua Idade: "));
                 salarioFeminino = parseFloat(pront("Insira seu Sálario: "));
                 somaSalarioF += salarioFeminino
                 contadorF++
                 return false
              

                
                let finalizar = prompt("Deseja continuar click ENTER ou digite finalizar para encerrar ");
                if (finaliza !== "finalizar") {
                    continuar = false;
                }
        
            } while (continuar);
                return false
          
            somaGrupoSalario = somaSalarioM + somaSalarioF
            mediaSalarioGrupo = somaGrupoSalario/contador

            somaIdade = idadeF + idadeM
            mediaIdade = somaIdade/contador



          
          
          
            }





}