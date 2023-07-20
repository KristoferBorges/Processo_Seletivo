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
    this.criarFuncionarioManualmente();
    // this.alterarFuncionarioManualmente();
    // this.excluirFuncionario(23);
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
      salario: 9350,
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
      nome: 'Sandra Regina',
      nascimento: '1968-07-21',
      email: 'sandra.santos@gmail.com',
      cargo: 'Analista',
      salario: 1450,
      ativo: 'Sim',
      dataAdmissao: '2003-04-10',
      dataDemissao: '0000-00-00',
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