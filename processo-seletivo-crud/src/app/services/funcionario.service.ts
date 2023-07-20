import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/funcionario.model'
import { API_URL, FUNCIONARIOS_ENDPOINT } from '../api/endpoints';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  constructor(private http: HttpClient) {}
  
  // Método para obter todos os funcionários
  obterFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(`${API_URL}${FUNCIONARIOS_ENDPOINT}`);
  }

  // Método para criar um novo funcionário
  criarFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(`${API_URL}${FUNCIONARIOS_ENDPOINT}`, funcionario);
  }

  // Método para atualizar um funcionário existente
  atualizarFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.put<Funcionario>(`${API_URL}${FUNCIONARIOS_ENDPOINT}/${funcionario.idfuncionario}`, funcionario);
  }

  // Método para excluir um funcionário
  excluirFuncionario(id: number): Observable<any> {
    return this.http.delete(`${API_URL}${FUNCIONARIOS_ENDPOINT}/${id}`);
  }
}
