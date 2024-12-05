<div align="center">

  <img src="./public/imgs/TURISTAR.png" alt="logo" width="200" height="auto" />
  <h1>Projeto Turistar</h1>
  
  <p>
    Projeto de TCC criado na Etec Camargo Aranha com colaboração com o curso de Guia de Turismo!
  </p>
   
<h4>
  <span> · </span>
    <a href="https://github.com/Louis3797/awesome-readme-template/">Documentação</a>
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
- [Contribuidores](#wave-contributing)

  

<!-- About the Project -->
## :star2: Sobre o projeto


<!-- Screenshots -->
### :camera: Screenshot

<div align="center"> 
  <img src="https://placehold.co/600x400?text=Your+Screenshot+here" alt="screenshot" />
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
| Cor Principal| ![#222831](https://via.placeholder.com/10/222831?text=+) #222831 |
| Cor Secundária | ![#393E46](https://via.placeholder.com/10/393E46?text=+) #393E46 |
| Cor Texto | ![#EEEEEE](https://via.placeholder.com/10/EEEEEE?text=+) #EEEEEE |

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




<!-- Roadmap -->
## :compass: Roadmap

* [x] Todo 1
* [ ] Todo 2


<!-- Contributing -->
## :wave: Contributing

<a href="https://github.com/Louis3797/awesome-readme-template/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Louis3797/awesome-readme-template" />
</a>


Contributions are always welcome!

See `contributing.md` for ways to get started.


<!-- Code of Conduct -->
### :scroll: Code of Conduct

Please read the [Code of Conduct](https://github.com/Louis3797/awesome-readme-template/blob/master/CODE_OF_CONDUCT.md)

<!-- FAQ -->
## :grey_question: FAQ

- Question 1

  + Answer 1

- Question 2

  + Answer 2


<!-- License -->
## :warning: License

Distributed under the no License. See LICENSE.txt for more information.


<!-- Contact -->
## :handshake: Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com

Project Link: [https://github.com/Louis3797/awesome-readme-template](https://github.com/Louis3797/awesome-readme-template)


<!-- Acknowledgments -->
## :gem: Acknowledgements

Use this section to mention useful resources and libraries that you have used in your projects.

 - [Shields.io](https://shields.io/)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [Emoji Cheat Sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md#travel--places)
 - [Readme Template](https://github.com/othneildrew/Best-README-Template)

