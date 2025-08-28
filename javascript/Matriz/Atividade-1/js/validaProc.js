function validaProc() {

    let linha = 3;
    let coluna = 3;
    let multiplicador;
    let resultado = []
    let matriz = []
    //--------------------------------------Alimentando a Matriz---------------------------------------------------------------
    
    
    for (i = 0; i < linha; i++) {

        matriz[i] = [] // identifica que é matriz

        for (c = 0; c < coluna; c++) {

            matriz[i][c] = parseInt(prompt("Digite o valor da linha " + i + " e coluna " + c));

        }
    }
    //-------------------------------------Solicitando o valor do multiplicador ------------------------------------------------


    multiplicador = parseInt(prompt("Qual o numero do multiplicador: "));

    for (i = 0; i < linha; i++) {
        resultado[i] = [] // identifica que é matriz

        for (c = 0; c < coluna; c++) {

            resultado[i][c] = matriz[i][c] * multiplicador
        }

    }
        //--------------------------------------Imprimindo resultado----------------------------------------------------------------


        for (i = 0; i < linha; i++) {

            for (c = 0; c < coluna; c++) {

                document.write(resultado[i][c] + "&nbsp&nbsp");

            }
            document.write("<br>");


        }
        return false;



    }

