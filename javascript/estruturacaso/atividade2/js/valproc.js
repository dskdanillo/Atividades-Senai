function procFormulario(){
   
    if (document.frmnumint.txtnumint1.value==""){
    alert("Insira o primeiro Valor")
    return false
    }
    if (document.frmnumint.txtnumint2.value==""){
        alert("Insira o segundo Valor")
        return false
    }
    if (document.frmnumint.txtnumintOP.value==""){
        alert("Escolha uma opção de 1 a 4")
        return false
    }


    let numint1=parseInt(document.getElementById('numint1').value)
    let numint2=parseInt(document.getElementById('numint2').value)
    let numintOP=parseInt(document.getElementById('numintOP').value)
    let calculo

    switch(numintOP){

        case 1: 
            calculo = numint1 + numint2
            alert(calculo);
            console.log(calculo);
            
                    if (calculo % 2 === 0) {
                    alert("O numero é PAR");
                    console.log("Par")
                    } else {
                    alert("o Número é Impar");
                    console.log("Impar");
                    }
              
            return false
            break

        case 2: 
            calculo = numint1 - numint2
            alert(calculo);
            console.log(calculo);
                   
                    if (calculo % 2 === 0) {
                        alert("O numero é PAR");
                        console.log("Par")
                    } else {
                        alert("o Número é Impar");
                        console.log("Impar");
                    }
                    
                return false
                break
        
         case 3: 
            calculo = numint1 * numint2
            alert(calculo);
            console.log(calculo);
           
                    if (calculo % 2 === 0) {
                        alert("O numero é PAR");
                        console.log("Par")
                    } else {
                        alert("o Número é Impar");
                        console.log("Impar");
                    }
                    
           return false
           break
        
        case 4: 
            calculo = numint1 / numint2
            alert(calculo);
            console.log(calculo);
                   
                    if (calculo % 2 === 0) {
                        alert("O numero é PAR");
                        console.log("Par")
                    } else {
                        alert("o Número é Impar");
                        console.log("Impar");
                    }
             
           return false
           break

    }
    
}
