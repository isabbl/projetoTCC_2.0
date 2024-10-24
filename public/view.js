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
        paragrafoDesc.innerHTML = `<strong>Descrição:</strong> ${lugar.descricao}`;
        divCorpoCard.appendChild(paragrafoDesc);

        const paragrafoEndereco = document.createElement("p");
        paragrafoEndereco.setAttribute("class","card-text");
        paragrafoEndereco.innerHTML =` <strong>Endereço:</strong> ${lugar.local}`;
        divCorpoCard.appendChild(paragrafoEndereco);

        const paragrafoTipoLugar = document.createElement("p");
        paragrafoTipoLugar.setAttribute("class","card-text");
        paragrafoTipoLugar.innerHTML = `<strong>Tipo de Lugar:</strong> ${lugar.tipo_lugar}`;
        divCorpoCard.appendChild(paragrafoTipoLugar);

        const paragrafoTelefone = document.createElement("p");
        paragrafoTelefone.setAttribute("class","card-text");
        paragrafoTelefone.innerHTML = `<strong>Telefone:</strong> ${lugar.telefone}`;
        divCorpoCard.appendChild(paragrafoTelefone);

        const paragrafoEstacao = document.createElement("p");
        paragrafoEstacao.setAttribute("class","card-text");
        paragrafoEstacao.innerHTML = ` <strong>Estação mais proxima:</strong> ${lugar.estacao}`;
        divCorpoCard.appendChild(paragrafoEstacao);

        const paragrafoFormaPagamento = document.createElement("p");
        paragrafoFormaPagamento.setAttribute("class","card-text");
        paragrafoFormaPagamento.innerHTML = `<strong>Forma de Pagamento:</strong> ${lugar.pagamento}`;
        divCorpoCard.appendChild(paragrafoFormaPagamento);

        const paragrafoFazReserva = document.createElement("p");
        paragrafoFazReserva.setAttribute("class","card-text");
        paragrafoFazReserva.innerHTML = `<strong>Faz reservas?</strong> ${lugar.reserva}`;
        divCorpoCard.appendChild(paragrafoFazReserva);

        grupoDeCards.appendChild(divColuna);

      });
    })
    .catch(error => {
      console.error('Erro ao carregar dados:', error);
      alert('Erro ao carregar dados, verifique o console para mais detalhes');
    });
});
