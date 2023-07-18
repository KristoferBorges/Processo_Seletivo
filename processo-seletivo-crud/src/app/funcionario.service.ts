import { Injectable } from '@angular/core';
import { Email, Funcionario } from './funcionario.model'

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  funcionarios: Funcionario = {
    nome: 'João',
    idade: 20,
    emails: [
      {endereco: 'joaodev@gmail.com', principal: true},
      {endereco: 'joao2020@gmail.com', principal: false}
    ],
    cargo: 'Desenvolvedor',
    salario: 'R$ 3.500,00',
    dataAdmissao: '17/07/2020',
    dataDemissao: '25/09/2023',
    ativo: true,
  };
  constructor() { }
}
