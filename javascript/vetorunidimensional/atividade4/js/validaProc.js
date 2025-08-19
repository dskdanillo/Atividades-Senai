function validaProc() {


    let i;

    let num = [];

    for (i = 0; i < 10; i++) {

        num[i] = parseFloat(prompt("Digite o " + (i+1) + "° numero"));

    }


    for (i = 0; i < 10; i++) {



        if (i% 2 != 0) {
            console.log("A posição " +i+ " é : "+ num[i]);
        }
    }
    return false
}

