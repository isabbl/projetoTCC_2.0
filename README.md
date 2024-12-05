<div align="center">

  <img src="./public/imgs/TURISTAR.png" alt="logo" width="200" height="auto" />
  <h1>Projeto Turistar</h1>
  
  <p>
    Projeto de TCC criado na Etec Camargo Aranha com colaboração com o curso de Guia de Turismo!
  </p>
   
<h4>
  <span> · </span>
    <a href="https://docs.google.com/document/d/1aIpb1FACnRY-QxivR-8wZV5SEMCfHKUF/edit?usp=sharing&ouid=100107909743078699184&rtpof=true&sd=true">Documentação</a>
  <span> · </span>
    <a href="http://eteccamargoaranha.com.br/">Etec Camargo Aranha</a>
  <span> · </span>
</div>

<br />

<!-- Table of Contents -->
# :notebook_with_decorative_cover: Sumário

- Sobre o projeto
  * [Screenshot](#camera-screenshot)
  * [Tecnologias](#space_invader-tecnologias)
  * [Recursos](#dart-recursos)
  * [Paleta de Cores](#art-paleta-de-cores)
- Se Preparando
  * [Pré-requisitos](#bangbang-pré-requisitos)
  * [Rodando localmente](#running-rodando-localmente)
- [Observações](#eyes-observações)
- [Contribuidores](#wave-contribuidores)

  

<!-- About the Project -->
## :star2: Sobre o projeto


<!-- Screenshots -->
### :camera: Screenshot

<div align="center"> 
  <img src="./public/imgCapaReadme/capturaTela.png" alt="screenshot" />
</div>


<!-- TechStack -->
### :space_invader: Tecnologias

<details>
  <summary>Front-end</summary>
  <ul>
    <li><a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">HTML5</a></li>
    <li><a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">CSS3</a></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Javascript</a></li>
    <li><a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/">Bootstrap</a></li>
  </ul>
</details>

<details>
  <summary>Back-end</summary>
  <ul>
    <li><a href="https://nodejs.org/api/all.html">Node.Js</a></li>
    <li><a href="https://expressjs.com/">Express.js</a></li>
    <li><a href="https://nodered.org/docs/getting-started/local">Node-Red</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.mysql.com/">MySQL</a></li>
  </ul>
</details>

<!-- Features -->
### :dart: Recursos

- Cadastrar lugares
- Criar perfil de Guia de Turismo
- Visualizar localidades da Mooca

<!-- Color Reference -->
### :art: Paleta de Cores

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Cor Principal| #CE6AFF |
| Cor Secundária | #FEEE04 |
| Cor Texto | #EEEEEE |

<!-- Getting Started -->
## 	:toolbox: Se Preparando

<!-- Prerequisites -->
### :bangbang: Pré-requisitos

Instalar versão atualizado do Node.js

```bash
# installs fnm (Fast Node Manager)
winget install Schniz.fnm

# configure fnm environment
fnm env --use-on-cd | Out-String | Invoke-Expression

# download and install Node.js
fnm use --install-if-missing 23

# verifies the right Node.js version is in the environment
node -v # should print `v23.3.0`

# verifies the right npm version is in the environment
npm -v # should print `10.9.0`
```

Instalar Node-red com algumas modificações

```bash
npm install -g --unsafe-perm node-red
npm i node-red-node-mysql
```
<!-- Run Locally -->
### :running: Rodando localmente

Clone o repositório

```bash
  https://github.com/isabbl/projetoTCC_2.0.git
```

Vá para o diretório do projeto

```bash
  cd projetoTCC_2.0
```

Instale as depedências dependencies

```bash
  npm i
```

```bash
  npm i express mysql2 body-parser
```

Start the server

```bash
  node server.js
```


<!-- Usage -->
## :eyes: Observações

Para realmente rodar o projeto será necessário se ter um banco de dados com o nome e atributos idênticos ao código
e támbem será neccesário a instalação desse seguinte flow de node-red: <a href="https://drive.google.com/file/d/121djUxCUW0U_gGLA50V0j_HQIfx7ovrf/view?usp=sharing">Flow Turistar</a>

<!-- Contributing -->
## :wave: Contribuidores

<div style="display:flex; justify-content: space-around;">
<a href="https://github.com/Cai0Sant0">
  <img src="https://avatars.githubusercontent.com/u/110570422?v=4" width="50" />
</a>
<a href="https://github.com/carolsant13">
  <img src="https://avatars.githubusercontent.com/u/144270722?v=4" width="50" />
</a>
<a href="https://github.com/isabbl">
  <img src="https://avatars.githubusercontent.com/u/145304227?v=4"  width="50" />
</a>
</div>




