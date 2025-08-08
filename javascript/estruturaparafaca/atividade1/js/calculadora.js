function validaProc(){

    let numero = document.getElementById("numint").value;

    if(numero == ""){  
        alert("digite um numero valido");
        document.frmnumint.numint.focus();
        return false;
    }else{
        for(let i = 1 ; i < 11 ; i ++){
            console.log(numero, "x", i , "=" , numero*i)
        }
        return true;
    }
}