function validaProc(){

        let cont=1
        let num
        let maiorNumero=0
       

        while(cont<=3){
                cont++    
                num = parseInt(prompt("Digite o número: "));
                console.log("O número informado é : ",num);
                              

                        if(num> maiorNumero)
                        {
                         maiorNumero = num
                        }
                      
                        }

                        console.log("O maior número é: "+maiorNumero);  


}