// pegando o elemento do botão

const btn_cadastro = document.getElementById("btn_enviar");

btn_cadastro.addEventListener("click",()=>{
    // pegando os elementos do cadastro

    let input_email = document.getElementById("email");
    let input_NomeUsu = document.getElementById("nomeUsu");
    let input_Senha = document.getElementById("senhaUsu");
    let input_telefone = document.getElementById("tel");
    let input_rua = document.getElementById("rua");
    let input_bairro = document.getElementById("bairro");

    if(input_email.value.length == 0 || input_NomeUsu.value.length == 0 || input_Senha.value.length == 0 || input_telefone.value.length == 0 ||input_rua.value.length == 0 ||input_bairro.value.length == 0){

      return alert("Digite todos os seus dados!")
    }

    const endpoint = `http://127.0.0.1:1880/cadastroUsu/${input_email.value}/${input_NomeUsu.value}/${input_Senha.value}/${input_telefone.value}/${input_bairro.value}/${input_rua.value}`;

    fetch(endpoint)
    .then(res => res.json())
    .then(res=>{
        input_email.value = "";
        input_NomeUsu.value = "";
        input_Senha.value = "";
        input_telefone.value = "";
        input_bairro.value = "";
        input_rua.value = "";
        console.log(res);
        if(res.affectedRows == 1){
             return   window.location.href = "login.html";
        }
        console.log("erro");
    })
        
});
