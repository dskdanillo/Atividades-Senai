function calcular() {
    // Captura os valores do HTML
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operacao = document.getElementById("operacao").value;
    let resultado;

    // Verifica qual operação fazer
    switch (operacao) {
        case "somar":
            resultado = num1 + num2;
            break;
        case "subtrair":
            resultado = num1 - num2;
            break;
        case "multiplicar":
            resultado = num1 * num2;
            break;
        case "dividir":
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = "Erro: divisão por zero!";
            }
            break;
        default:
            resultado = "Operação inválida.";
    }

    // Limpa a tela e exibe o resultado usando document.write
    document.write("<h2>Resultado: " + resultado + "</h2>");
}
