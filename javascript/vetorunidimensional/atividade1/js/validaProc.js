    function validaProc(){

      
        let i;
    
        let num=[];
     
        for(i = 0; i<3 ; i++){

            num[i]=parseFloat(prompt("Digite a nota do "+i+" aluno"));

        }

        
        for (i=0 ; i<3; i++){

                

                    if(num[i]>= 7.5){
                       
                        console.log("As notas é: "+num[i]+" e foi maior igual a 7.5 e merece uma estrelinha no boletim");
                    }
                    else{
                        console.log("\n\nAbaixo de 7.5  >>> nota: "+ num[i]+" Bora estudar que ta precisando");
                   
                    }
        }

return false;

}
