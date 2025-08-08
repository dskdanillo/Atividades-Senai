function validaProc(){
    

    if(document.frmnumint.txnumint.value==""){
        alert("Preencha o campo Número");
        document.frmnumint.txnumint.focus();
        return false;

    }else {
        //alert ("entrei");
    let nu=parseInt(document.getElementById('numint').value);
    cont = 1;
    console.log("Taboada do número", nu);

    
    do{

         console.log(nu+ "x"+ cont + "=" + nu * cont);
        cont=cont+1;
    
    }while(cont<=10)
    return false;
       
} 

}  