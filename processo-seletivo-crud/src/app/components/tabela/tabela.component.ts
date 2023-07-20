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
    this.excluirFuncionario(25);
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
      idfuncionario: 1, 
      nome: 'Simone Cardoso',
      nascimento: '1990-02-21',
      email: 'simone.tesla@gmail.com',
      cargo: 'Gerente de Projetos',
      salario: 12150,
      ativo: 'Sim',
      dataAdmissao: '2013-04-13',
      dataDemissao: '0000-00-00', // Se o funcionário ainda não foi demitido
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
      nome: 'Roberto Santos',
      nascimento: '1978-06-20',
      email: 'roberto.santos@gmail.com',
      cargo: 'Engenheiro de Software',
      salario: 5200,
      ativo: 'Não',
      dataAdmissao: '2002-04-10',
      dataDemissao: '2021-11-05',
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