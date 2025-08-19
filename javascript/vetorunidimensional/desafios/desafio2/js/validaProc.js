function validaProc() {
     let num = [];
     let pesquisaNum;
     let encontrado = false;
 

     for (let i = 0; i < 10; i++) {
         num[i] = parseInt(prompt("Digite o " + (i+1) + "º valor para o vetor"));
         console.log("Valor armazenado na posição " + i + " >>> " + num[i]);
     }
 
 
     pesquisaNum = parseInt(prompt("Digite o número que deseja procurar no vetor"));
 
    
               for (let i = 0; i < 10; i++) {
                         if (num[i] === pesquisaNum) {
                              console.log("O número " + pesquisaNum + " está na posição: " + i);
                              encontrado = true;
                              break; 
                         }
               }
 
                              if (encontrado = false) {
                              console.log("O número " + pesquisaNum + " não foi encontrado no vetor.");
                              }
 
     return false;
 }
 