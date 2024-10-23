document.addEventListener('DOMContentLoaded', function() {
  console.log('Página carregada, iniciando fetch...');
  fetch('/lugares')
    .then(response => {
      console.log('Resposta recebida:', response);
      if (!response.ok) {
        throw new Error('Erro na resposta do servidor');
      }
      return response.json();
    })
    .then(data => {
      console.log('Dados recebidos:', data); // Verifique se os dados estão corretos aqui

      data.forEach(lugar => {

        const grupoDeCards = document.querySelector(".grupoCards")

        const divColuna = document.createElement("div");
        divColuna.setAttribute("class","col");

        const divCard = document.createElement("div");
        divCard.setAttribute("class","card h-100");
        divColuna.appendChild(divCard);

        const imgCard = document.createElement("img");
        imgCard.setAttribute("class","card-img-top");
        imgCard.setAttribute("src", lugar.image);
        imgCard.setAttribute("alt", "Imagem do "+lugar.title);
        divCard.prepend(imgCard);
        
        const divCorpoCard = document.createElement("div");
        divCorpoCard.setAttribute("class","card-body");
        divCard.appendChild(divCorpoCard);

        const tituloLugar = document.createElement("h5");
        tituloLugar.setAttribute("class","card-title");
        tituloLugar.innerHTML = lugar.title;
        divCorpoCard.appendChild(tituloLugar);

        const paragrafoDesc = document.createElement("p");
        paragrafoDesc.setAttribute("class","card-text");
        paragrafoDesc.innerHTML = lugar.descricao;
        divCorpoCard.appendChild(paragrafoDesc);

        const paragrafoEndereco = document.createElement("p");
        paragrafoEndereco.setAttribute("class","card-text");
        paragrafoEndereco.innerHTML = lugar.local;
        divCorpoCard.appendChild(paragrafoEndereco);

        const paragrafoTipoLugar = document.createElement("p");
        paragrafoTipoLugar.setAttribute("class","card-text");
        paragrafoTipoLugar.innerHTML = lugar.tipo_lugar;
        divCorpoCard.appendChild(paragrafoTipoLugar);

        const paragrafoTelefone = document.createElement("p");
        paragrafoTelefone.setAttribute("class","card-text");
        paragrafoTelefone.innerHTML = lugar.telefone;
        divCorpoCard.appendChild(paragrafoTelefone);

        const paragrafoEstacao = document.createElement("p");
        paragrafoEstacao.setAttribute("class","card-text");
        paragrafoEstacao.innerHTML = lugar.estacao;
        divCorpoCard.appendChild(paragrafoEstacao);

        const paragrafoFormaPagamento = document.createElement("p");
        paragrafoFormaPagamento.setAttribute("class","card-text");
        paragrafoFormaPagamento.innerHTML = lugar.pagamento;
        divCorpoCard.appendChild(paragrafoFormaPagamento);

        const paragrafoFazReserva = document.createElement("p");
        paragrafoFazReserva.setAttribute("class","card-text");
        paragrafoFazReserva.innerHTML = lugar.reserva;
        divCorpoCard.appendChild(paragrafoFazReserva);

        grupoDeCards.appendChild(divColuna);

        
        // listItem.innerHTML = `
        //   <h5 class="mb-1">${lugar.title}</h5>
        //   <p class="mb-1">Endereço: ${lugar.local}</p>
        //   <p class="mb-1">Telefone: ${lugar.telefone}</p>
        //   <p class="mb-1">Estação mais próxima: ${lugar.estacao}</p>
        //   <p class="mb-1">Aceita: ${lugar.pagamento}</p>
        //   <p class="mb-1">Faz reservas?: ${lugar.reserva}</p>
        //   <p class="mb-1">Tipo de Lugar: ${lugar.tipo_lugar}</p>
        //   <p class="mb-1">Descrição: ${lugar.descricao}</p>
        //   <img src="${lugar.image}" alt="${lugar.title}" class="img-fluid" style="max-width: 100px;" />
        // `;
        // lugaresList.appendChild(listItem);

      });
    })
    .catch(error => {
      console.error('Erro ao carregar dados:', error);
      alert('Erro ao carregar dados, verifique o console para mais detalhes');
    });
});
