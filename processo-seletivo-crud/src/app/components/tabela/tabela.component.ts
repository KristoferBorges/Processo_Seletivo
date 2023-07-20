import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Funcionario } from 'src/app/models/funcionario.model';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit{
  funcionarios: Funcionario[] = [];

  constructor(private funcionarioService: FuncionarioService) {}
  
  ngOnInit() {
    // this.criarFuncionarioManualmente();
    // this.alterarFuncionarioManualmente();
    this.excluirFuncionario(58);
    this.obterFuncionarios();
  }

  obterFuncionarios() {
    this.funcionarioService.obterFuncionarios().subscribe(
      (data) => {
        this.funcionarios = data;
        console.log('Funcionários no componente:', this.funcionarios);
      },
      (error) => {
        console.error('Erro ao obter os funcionários:', error);
      }
    );
  }

  alterarFuncionarioManualmente() {
    // Crie um objeto com os dados do funcionário a ser atualizado
    const funcionarioAtualizado: Funcionario = {
      idfuncionario: 66, 
      nome: 'Simone Sonco',
      nascimento: '1996-06-21',
      email: 'simone.sonco@gmail.com',
      cargo: 'Projetista de Máquinas',
      salario: 3350,
      ativo: 'Não',
      dataAdmissao: '2013-04-13',
      dataDemissao: '2020-07-11', // Se o funcionário ainda não foi demitido
      
    };

    // Chame o serviço para atualizar o funcionário
    this.funcionarioService.atualizarFuncionario(funcionarioAtualizado).subscribe(
      (data) => {
        console.log('Funcionário atualizado com sucesso:', data);
      },
      (error) => {
        console.error('Erro ao atualizar funcionário:', error);
      }
    );
  }

  criarFuncionarioManualmente() {
    // Crie um objeto com os dados do novo funcionário
    const novoFuncionario: Partial<Funcionario> = {
      nome: 'Camila Costa',
      nascimento: '1995-03-25',
      email: 'camila.costa@gmail.com',
      cargo: 'Analista de Marketing Digital',
      salario: 2600,
      ativo: 'Não',
      dataAdmissao: '2019-06-05',
      dataDemissao: '2023-07-15',
    };

    // Chame o serviço para criar o novo funcionário
    this.funcionarioService.criarFuncionario(novoFuncionario as Funcionario).subscribe(
      (data) => {
        console.log('Funcionário criado com sucesso:', data);
      },
      (error) => {
        console.error('Erro ao criar funcionário:', error);
      }
    );
  }

  excluirFuncionario(id: number) {
    this.funcionarioService.excluirFuncionario(id).subscribe(
      (data) => {
        console.log('Funcionário criado com sucesso:', data);
      },
      (error) => {
        console.error('Erro ao criar funcionário:', error);
      }
    );
  }
}