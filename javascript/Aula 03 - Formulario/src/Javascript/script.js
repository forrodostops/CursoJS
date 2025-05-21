document.getElementById("primeiroNome").focus()


function mostrarSenha(){
    const inputSenhaI = document.querySelector("#senha");
    const btnIcone1 = document.querySelector("#btn-iconeI");
    if(inputSenhaI.type === "password"){
        inputSenhaI.type = "text";
        btnIcone1.classList.add("fa-eye");
    }else{
        inputSenhaI.type = "password";
        btnIcone1.classList.remove("fa-eye");
    }
        
}
function mostrarSenhaConfirmar(){
    const inputSenhaII = document.querySelector("#confirmarSenha");
    const btnIcone2 = document.querySelector("#btn-iconeII");

    if(inputSenhaII.type === "password"){
        inputSenhaII.type = "text";
        btnIcone2.classList.add("fa-eye");
    }else{
        inputSenhaII.type = "password";
        btnIcone2.classList.remove("fa-eye");
    }
}