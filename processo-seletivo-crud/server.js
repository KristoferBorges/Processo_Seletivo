const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./db'); // Importe o arquivo de conexão

const app = express();
const port = 4200; // Escolha a porta que desejar

// Configurar o middleware para interpretar o corpo das requisições
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Definir as rotas para a REST API
app.get('/funcionarios', (req, res) => {
  // Consulta SQL para obter todos os funcionários
  const sql = 'SELECT * FROM funcionarios';

  // Executar a consulta no banco de dados
  connection.query(sql, (err, result) => {
    if (err) {
      // Se ocorrer algum erro na consulta, envie uma resposta com o status de erro
      console.error('Erro ao obter funcionários:', err);
      res.status(500).json({ error: 'Erro ao obter funcionários' });
    } else {
      // Se a consulta for bem-sucedida, envie os resultados em JSON
      console.log('Funcionários obtidos com sucesso:', result);
      res.status(200).json(result);
    }
  });
});

app.get('/funcionarios/:id', (req, res) => {
  const idFuncionario = req.params.id;
  // Consulta SQL para obter um funcionário específico pelo ID
  const sql = 'SELECT * FROM funcionarios WHERE idfuncionario = ?';

  // Executar a consulta no banco de dados com o ID fornecido como parâmetro
  connection.query(sql, [idFuncionario], (err, result) => {
    if (err) {
      // Se ocorrer algum erro na consulta, envie uma resposta com o status de erro
      console.error('Erro ao obter funcionário:', err);
      res.status(500).json({ error: 'Erro ao obter funcionário' });
    } else {
      // Se a consulta for bem-sucedida, envie o resultado em JSON
      console.log('Funcionário obtido com sucesso:', result);
      if (result.length === 0) {
        // Se não encontrar um funcionário com o ID fornecido, envie um status 404 - Not Found
        res.status(404).json({ message: 'Funcionário não encontrado' });
      } else {
        // Se encontrar o funcionário, envie o resultado em JSON
        res.status(200).json(result[0]);
      }
    }
  });
});

app.post('/funcionarios', (req, res) => {
  // Capturar os dados fornecidos na requisição POST
  const novoFuncionario = req.body;

  // Montar a consulta SQL para inserção do novo funcionário
  const sql = `INSERT INTO funcionarios (nome, idade, email, cargo, salario, dataAdmissao, dataDemissao, ativo) 
               VALUES ('Maria', '54', 'maria@gmail.com', 'Psicóloga', '3450', '18/07/2023', '00/00/0000', 'Sim')`;

  // Executar a consulta SQL para inserir o novo funcionário
  connection.query(sql, [
    novoFuncionario.nome,
    novoFuncionario.idade,
    novoFuncionario.email,
    novoFuncionario.cargo,
    novoFuncionario.salario,
    novoFuncionario.dataAdmissao,
    novoFuncionario.dataDemissao,
    novoFuncionario.ativo,
  ], (err, result) => {
    if (err) {
      // Se ocorrer algum erro na consulta SQL, envie uma resposta com o status de erro
      console.error('Erro ao inserir novo funcionário:', err);
      res.status(500).json({ error: 'Erro ao inserir novo funcionário' });
    } else {
      // Se a inserção for bem-sucedida, envie uma resposta indicando o sucesso
      console.log('Novo funcionário inserido com sucesso:', result.insertId);
      res.status(201).json({ message: 'Funcionário inserido com sucesso', id: result.insertId });
    }
  });
});

app.put('/funcionarios/:id', (req, res) => {
  const idFuncionario = req.params.id;
  const dadosFuncionario = req.body; // Dados fornecidos na requisição

  // Consulta SQL para atualizar os dados do funcionário com o ID fornecido
  const sql = 'UPDATE funcionarios SET nome = ?, idade = ?, email = ?, cargo = ?, salario = ?, dataAdmissao = ?, dataDemissao = ?, ativo = ? WHERE idfuncionario = ?';

  // Executar a consulta no banco de dados com os dados fornecidos e o ID do funcionário
  connection.query(
    sql,
    [
      dadosFuncionario.nome,
      dadosFuncionario.idade,
      dadosFuncionario.email,
      dadosFuncionario.cargo,
      dadosFuncionario.salario,
      dadosFuncionario.dataAdmissao,
      dadosFuncionario.dataDemissao,
      dadosFuncionario.ativo,
      idFuncionario,
    ],
    (err, result) => {
      if (err) {
        // Se ocorrer algum erro na consulta, envie uma resposta com o status de erro
        console.error('Erro ao atualizar funcionário:', err);
        res.status(500).json({ error: 'Erro ao atualizar funcionário' });
      } else {
        // Se a atualização for bem-sucedida, envie uma resposta indicando o sucesso
        console.log('Funcionário atualizado com sucesso:', result.affectedRows);
        if (result.affectedRows === 0) {
          // Se o ID não for encontrado na tabela, envie um status 404 - Not Found
          res.status(404).json({ message: 'Funcionário não encontrado' });
        } else {
          res.status(200).json({ message: 'Funcionário atualizado com sucesso' });
        }
      }
    }
  );
});

app.delete('/funcionarios/:id', (req, res) => {
  const idFuncionario = req.params.id;

  // Consulta SQL para excluir o funcionário com o ID fornecido
  const sql = 'DELETE FROM funcionarios WHERE idfuncionario = ?';

  // Executar a consulta no banco de dados com o ID do funcionário
  connection.query(sql, [idFuncionario], (err, result) => {
    if (err) {
      // Se ocorrer algum erro na consulta, envie uma resposta com o status de erro
      console.error('Erro ao excluir funcionário:', err);
      res.status(500).json({ error: 'Erro ao excluir funcionário' });
    } else {
      // Se a exclusão for bem-sucedida, envie uma resposta indicando o sucesso
      console.log('Funcionário excluído com sucesso:', result.affectedRows);
      if (result.affectedRows === 0) {
        // Se o ID não for encontrado na tabela, envie um status 404 - Not Found
        res.status(404).json({ message: 'Funcionário não encontrado' });
      } else {
        res.status(200).json({ message: 'Funcionário excluído com sucesso' });
      }
    }
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});