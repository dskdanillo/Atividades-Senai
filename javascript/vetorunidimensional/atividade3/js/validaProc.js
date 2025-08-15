function validaProc(){


        let i;
        let quadrado=0
        let num=[];
     
        for(i = 0; i<10 ; i++){
    
            num[i]=parseFloat(prompt("Digite o "+(i+1)+" número a ser elevado ao quadrado!!"));
    
        }
    
        
        for (i=0 ; i<10; i++){
    
                quadrado = num[i]*num[i]
                console.log("O quadrado do numero: "+num[i]+ " é : " +quadrado)
    
        }
                    

    return false;
    
    }
    



