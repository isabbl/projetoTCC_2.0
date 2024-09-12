-- Cria o banco de dados se ele ainda não existir
CREATE DATABASE IF NOT EXISTS blog_db;

-- Seleciona o banco de dados para uso
USE blog_db;

-- Cria a tabela 'lugares' com as colunas especificadas
CREATE TABLE IF NOT EXISTS lugares (
    id INT AUTO_INCREMENT PRIMARY KEY,   -- Coluna de ID com incremento automático
    title VARCHAR(255) NOT NULL,         -- Coluna para o título (nome do lugar)
    local VARCHAR(255) NOT NULL,         -- Coluna para o endereço do lugar
    telefone VARCHAR(50),                -- Coluna para o telefone do lugar
    estacao VARCHAR(100),                -- Coluna para a estação mais próxima
    pagamento VARCHAR(255),              -- Coluna para os métodos de pagamento aceitos
    reserva VARCHAR(10),                 -- Coluna para indicar se faz reservas
    descricao TEXT,                      -- Coluna para a descrição do lugar
    image VARCHAR(255),                  -- Coluna para a URL da imagem
    tipo_lugar VARCHAR(255)              -- Coluna para o tipo do lugar (ex: restaurante, bar)
);
