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
  
  // Realização dos CRUDs no sistema
  ngOnInit() {
    // this.criarFuncionarioManualmente();
    // this.alterarFuncionarioManualmente();
    // this.excluirFuncionario(59);
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
      idfuncionario: 78, 
      nome: 'Fatima Costa',
      nascimento: '1985-03-25',
      email: 'fatima.costa@gmail.com',
      cargo: 'Marketing Digital',
      salario: 2650,
      ativo: 'Não',
      dataAdmissao: '2019-06-05',
      dataDemissao: '2023-07-15', // Se o funcionário ainda não foi demitido
      
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
      nome: 'Fatima Costa',
      nascimento: '1985-03-25',
      email: 'fatima.costa@gmail.com',
      cargo: 'Marketing Digital',
      salario: 2650,
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