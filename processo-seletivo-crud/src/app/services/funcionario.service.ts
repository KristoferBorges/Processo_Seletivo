import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/funcionario.model'

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  private baseUrl = 'http://localhost:4200';

  constructor(private http: HttpClient) {}
  
  // Método para obter todos os funcionários
  obterFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(`${this.baseUrl}/funcionarios`);
  }

  // Método para obter um funcionário por ID
  obterFuncionarioPorId(id: number): Observable<Funcionario> {
    return this.http.get<Funcionario>(`${this.baseUrl}/funcionarios/${id}`);
  }

  // Método para criar um novo funcionário
  criarFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(`${this.baseUrl}/funcionarios`, funcionario);
  }

  // Método para atualizar um funcionário existente
  atualizarFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.put<Funcionario>(`${this.baseUrl}/funcionarios/${funcionario.idfuncionario}`, funcionario);
  }

  // Método para excluir um funcionário
  excluirFuncionario(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/funcionarios/${id}`);
  }
}
