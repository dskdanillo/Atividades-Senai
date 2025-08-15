function validaProc(){

      
    let i;
    let pessoalInteligente=0
    let num=[];
 
    for(i = 0; i<3 ; i++){

        num[i]=parseFloat(prompt("Digite a nota do "+(i+1)+" aluno"));

    }

    
    for (i=0 ; i<3; i++){

            

                if(num[i]>= 7.5){
                   
                    console.log("As notas é: "+num[i]+" e foi maior igual a 7.5 ");
                    pessoalInteligente++
                }
                else{
                    console.log("\n\nAbaixo de 7.5  >>> nota: "+ num[i]);
               
                }
    }
                    console.log("A quantidade de pessoas que tiraram nota igual e superior a 7.5 é: "+pessoalInteligente);

return false;

}
