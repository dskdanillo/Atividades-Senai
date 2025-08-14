function validaProc() {
    
    
    let imc = 0;
    let altura;
    let peso;
    let continuar = true;

    do {
        altura = parseFloat(prompt("Digite sua Altura atual 'use o ponto ': "));
        console.log("Altura informada:", altura);

        peso = parseFloat(prompt("Digite seu Peso atual >> Não vale Mentir << : "));
        console.log("Peso informado:", peso);

                                imc = peso / (altura * altura);

        alert("Seu IMC: " + imc);

                if (imc < 18.5) {
                    alert("Abaixo do peso: IMC menor que 18,5.");
                    console.log("Abaixo do peso: IMC menor que 18,5.");
                } else if (imc >= 18.5 && imc <= 24.9) {
                    alert("Peso normal: IMC entre 18,5 e 24,9.");
                    console.log("Peso normal: IMC entre 18,5 e 24,9.");
                } else if (imc >= 25 && imc <= 29.9) {
                    alert("Sobrepeso: IMC entre 25 e 29,9.");
                    console.log("Sobrepeso: IMC entre 25 e 29,9.");
                } else {
                    alert("Obesidade: IMC igual ou superior a 30");
                    console.logalert("Obesidade: IMC igual ou superior a 30");
                }

        
        let resposta = prompt("Deseja calcular novamente? (S/N)");
        if (resposta !== "s") {
            continuar = false;
        }

    } while (continuar);

    alert("Até logo");
}

