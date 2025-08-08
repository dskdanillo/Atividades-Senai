function validaFormulario()
{
   // alert("testando o JavaScript")
 
   
    if(document.frmcadastro.txtnome.value==""){  //value = valor

            alert("Preencha o campo Nome");// igual o escreva do portugol
            document.frmcadastro.txtnome.focus();
            return false;

    }else if(document.frmcadastro.txtfone.value==""){
            alert("Preencha o campo Telefone");
            document.frmcadastro.txtnome.focus();
            return false;

    }else if(document.frmcadastro.txtemail.value==""){
            alert("Preencha o campo E-mail");
            document.frmcadastro.txtemail.focus();
            return false;

    }else{
            alert("Todos campos preenchidos");
            return true;
    }
}