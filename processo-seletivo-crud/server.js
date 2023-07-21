const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./db'); 
const cors = require('cors');

const app = express();
const port = 3000; 

// Configurar o middleware para interpretar o corpo das requisições
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Definir as rotas para a REST API
app.get('/funcionarios', (req, res) => {
  // Consulta SQL para obter todos os funcionários
  const sql = 'SELECT * FROM funcionario';
  
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

app.post('/funcionarios', (req, res) => {
  // Capturar os dados fornecidos na requisição POST
  const novoFuncionario = req.body;

  // Montar a consulta SQL para inserção do novo funcionário
  const sql = `INSERT INTO funcionario (nome, nascimento, email, cargo, salario, ativo, dataAdmissao, dataDemissao) 
               VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  // Executar a consulta SQL para inserir o novo funcionário
  connection.query(sql, [
    novoFuncionario.nome,
    novoFuncionario.nascimento,
    novoFuncionario.email,
    novoFuncionario.cargo,
    novoFuncionario.salario,
    novoFuncionario.ativo,
    novoFuncionario.dataAdmissao,
    novoFuncionario.dataDemissao,
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
  const sql = 'UPDATE funcionario SET nome = ?, nascimento = ?, email = ?, cargo = ?, salario = ?, ativo = ?, dataAdmissao = ?, dataDemissao = ? WHERE idfuncionario = ?';

  // Executar a consulta no banco de dados com os dados fornecidos e o ID do funcionário
  connection.query(
    sql,
    [
      dadosFuncionario.nome,
      dadosFuncionario.nascimento,
      dadosFuncionario.email,
      dadosFuncionario.cargo,
      dadosFuncionario.salario,
      dadosFuncionario.ativo,
      dadosFuncionario.dataAdmissao,
      dadosFuncionario.dataDemissao,
      idFuncionario,
    ],
    (err, result) => {
      if (err) {
        console.error('Erro ao atualizar funcionário:', err);
        res.status(500).json({ error: 'Erro ao atualizar funcionário' });
      } else {
        console.log('Funcionário atualizado com sucesso:', result.affectedRows);
        if (result.affectedRows === 0) {
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
  const sql = 'DELETE FROM funcionario WHERE idfuncionario = ?';

  // Executar a consulta no banco de dados com o ID do funcionário
  connection.query(sql, [idFuncionario], (err, result) => {
    if (err) {
      console.error('Erro ao excluir funcionário:', err);
      res.status(500).json({ error: 'Erro ao excluir funcionário' });
    } else {
      console.log('Funcionário excluído com sucesso:', result.affectedRows);
      if (result.affectedRows === 0) {
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