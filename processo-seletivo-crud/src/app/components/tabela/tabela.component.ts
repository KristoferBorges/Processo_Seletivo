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
}
