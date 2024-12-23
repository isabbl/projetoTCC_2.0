// colocando os dados do usuário na tela

let infoNome = document.querySelector(".infoNome");
let infoEmail = document.querySelector(".infoEmail");
let infoSenha = document.querySelector(".infoSenha");
let infoRua = document.querySelector(".infoRua");
let infoBairro = document.querySelector(".infoBairro");

//Verifica se o usuário está logado
if(localStorage.getItem("token") == null){
    alert("Você precisa estar logado para acessar esssa página");
    window.location.href = "login.html";
}


let userLogado = JSON.parse(localStorage.getItem("userLogado"));

infoNome.innerHTML = userLogado.nome;
infoEmail.innerHTML = userLogado.email;
infoSenha.innerHTML = userLogado.senha;
infoRua.innerHTML = `Rua ${userLogado.rua}`;
infoBairro.innerHTML = `, ${userLogado.bairro}`;

//Saindo do perfil
document.querySelector(".sair").addEventListener("click",()=>{
    localStorage.clear()
});


//Mandando foto do usuário para o banco

let btnEnviarImagem = document.querySelector(".botaoPerfil");
let inputFile = document.querySelector("#inputArquivo");
let divImg = document.querySelector(".imagem");

btnEnviarImagem.addEventListener("click",()=>{
    let img = prompt("Coloque aqui o URL da imagem de perfil");

    let imgFundoDiv = `background: url(${img});`

    divImg.setAttribute("style", imgFundoDiv);
});

           