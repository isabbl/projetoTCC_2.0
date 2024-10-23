const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

// Configuração da conexão com o banco de dados MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Substitua pela sua senha do MySQL
  database: 'blog_db'
});

// Conecta ao banco de dados
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    throw err;
  }
  console.log('Conectado ao banco de dados MySQL!');
});

// Middleware para processar JSON e URL encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint para buscar lugares
app.get('/lugares', (req, res) => {
  const sql = 'SELECT * FROM lugares';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erro ao buscar lugares:', err);
      res.status(500).send('Erro ao buscar lugares');
    } else {
      res.json(results); // Retorna os resultados como JSON
    }
  });
});

// Endpoint para processar o envio do formulário
app.post('/submit', (req, res) => {
  const { title, local, telefone, estacao, pagamento, reserva, descricao, image, tipo_lugar } = req.body;

  // Processa os valores capturados dos checkboxes
  const tipoLugarValues = Array.isArray(tipo_lugar) ? tipo_lugar.join(', ') : tipo_lugar;
  const pagamentoValues = Array.isArray(pagamento) ? pagamento.join(', ') : pagamento;
  const reservaValue = reserva.includes('sim') ? 'Sim' : 'Não';

  const sql = 'INSERT INTO lugares (title, local, telefone, estacao, pagamento, reserva, descricao, image, tipo_lugar) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [title, local, telefone, estacao, pagamentoValues, reservaValue, descricao, image, tipoLugarValues], (err, result) => {
    if (err) {
      console.error('Erro ao inserir dados:', err);
      return res.status(500).send('Erro ao inserir dados');
    }
    res.send('Dados inseridos com sucesso');
  });
});

// Servindo arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
