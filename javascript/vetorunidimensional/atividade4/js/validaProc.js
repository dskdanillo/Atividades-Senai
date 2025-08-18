function validaProc(){

      
    let i;

    let num=[];
 
    for(i = 0; i<10 ; i++){

        num[i]=parseFloat(prompt("Digite o "+i+"° numero"));

    }

    
    for (i=0 ; i<10; i++){

            

                if(num[i] % 2!= 0){
                   
                    console.log("As valor da posição impar é: "+num[i]);
                }
            }
            return false
        }

