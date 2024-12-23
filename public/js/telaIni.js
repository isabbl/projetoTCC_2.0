import { Cxmsg } from "./Cxmsg.js";

// Verificação para ver se usuário está logado
if(localStorage.getItem("token") == null){
    alert("Você precisa estar logado para acessar esssa página");
    window.location.href = "login.html";
}

// Pegando o usuário logado do localStorage
let userLogado = JSON.parse(localStorage.getItem("userLogado"));
let msg = document.querySelector("#msg");
msg.innerHTML = `Seja Bem Vindo(a) ${userLogado.nome}`;

//Pegando os cards

let cards = [...document.querySelectorAll(".card")];

//Colocando imagem de perfil

    let fotoPerfil = document.querySelector(".fotoPerfil");
    fotoPerfil.addEventListener("click",()=>{
        let urlFoto = prompt("Coloque aqui o url da sua foto");
        fotoPerfil.src = urlFoto;
    })

// Saindo do perfil

document.querySelector(".sair").addEventListener("click",()=>{
    localStorage.clear()
});


// Pegando botão para adicionar lugar

let btnAddLocal = document.querySelector(".btnAdd");

btnAddLocal.addEventListener("click",()=>{
    window.open("index.html","_self");
});

//Verificando se usuario é admin

if(userLogado.senha!="admin12132024"){
    let divBtnAdicionaLugar = document.querySelector(".divBtnAdicionaLugar")
    divBtnAdicionaLugar.style.display = "none";
}

