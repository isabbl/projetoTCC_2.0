document.getElementById('add-post-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(this);
  const data = {};
  formData.forEach((value, key) => {
      if (!data[key]) {
          data[key] = value;
      } else {
          // Caso o campo já exista, transforma em um array para armazenar múltiplos valores
          data[key] = [].concat(data[key], value);
      }
  });

  fetch('/submit', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Erro ao enviar dados');
      }
      return response.text();
  })
  .then(text => {
      alert(text); // Mensagem do servidor sobre o status da operação
      document.getElementById('add-post-form').reset();
  })
  .catch(error => {
      console.error('Erro ao cadastrar os dados:', error); // Ajuste para capturar o erro no console
      alert('Erro ao cadastrar os dados, verifique o console para mais detalhes');
  });
});
