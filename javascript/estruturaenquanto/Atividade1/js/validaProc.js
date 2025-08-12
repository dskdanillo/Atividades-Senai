function validaProc(){

    let somatoria=0;
    let num=0
    let cont=0
    while(cont<=2){

        num = parseInt(prompt("Digite o número: "));
        console.log("O número informado é : ",num);
        somatoria += num;
       // resposta = parseInt("Para sair digite o número 0 ou outro para continuar : ");
        cont++
      }

        console.log("A somatório dos números é : ", somatoria);
        return false;
    }

