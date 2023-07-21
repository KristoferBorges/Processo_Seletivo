const mysql = require('mysql');

// Configurações de conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',    
  user: 'root',   
  password: '', 
  database: 'registros' 
});

// Estabelecer a conexão com o banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }

  console.log('Conexão estabelecida com sucesso!');

  // Consulta SQL para testar a conexão e obter alguns dados
  const sql = 'SELECT * FROM funcionario';

  // Executar a consulta no banco de dados
  connection.query(sql, (err, result) => {
    if (err) {
      console.error('Erro na consulta:', err);
      connection.end(); // Fechar a conexão com o banco de dados
      return;
    }

    console.log('Resultado da consulta:', result);

    // Fechar a conexão com o banco de dados
    connection.end();
  });
});
