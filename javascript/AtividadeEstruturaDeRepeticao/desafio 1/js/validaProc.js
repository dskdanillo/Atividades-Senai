function validaProc() {
    let soma = 0;
    let resposta = 0;

    let num1 = parseInt(prompt("Digite o primeiro número: "));
    console.log("O primeiro número informado é:", num1);

    let num2 = parseInt(prompt("Digite o segundo número: "));
    console.log("O segundo número informado é:", num2);

                         soma = num1 + num2;                     
 
 
 
 
    let tentativas = 0;

    do {
        tentativas++;

        resposta = parseInt(prompt("Digite sua tentativa " + tentativas + "ª:"));
        console.log("Você digitou:", resposta);

                            if (resposta !== soma) {
                                alert("Tente novamente!");
                             }

    } while (resposta !== soma);

    alert("Parabéns ++++++ Você acertou em " + tentativas + " tentativas ++++++");
    console.log("Parabéns ++++++ Você acertou em " + tentativas + " tentativas ++++++");

    
    
    
    
    
    
    
    
    
    
    return false;


}
