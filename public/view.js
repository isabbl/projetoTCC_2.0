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
      const lugaresList = document.getElementById('lugares-list');
      lugaresList.innerHTML = '';

      data.forEach(lugar => {
        const listItem = document.createElement('a');
        listItem.className = 'list-group-item list-group-item-action';
        listItem.innerHTML = `
          <h5 class="mb-1">${lugar.title}</h5>
          <p class="mb-1">Endereço: ${lugar.local}</p>
          <p class="mb-1">Telefone: ${lugar.telefone}</p>
          <p class="mb-1">Estação mais próxima: ${lugar.estacao}</p>
          <p class="mb-1">Aceita: ${lugar.pagamento}</p>
          <p class="mb-1">Faz reservas?: ${lugar.reserva}</p>
          <p class="mb-1">Tipo de Lugar: ${lugar.tipo_lugar}</p>
          <p class="mb-1">Descrição: ${lugar.descricao}</p>
          <img src="${lugar.image}" alt="${lugar.title}" class="img-fluid" style="max-width: 100px;" />
        `;
        lugaresList.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error('Erro ao carregar dados:', error);
      alert('Erro ao carregar dados, verifique o console para mais detalhes');
    });
});
