import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endereco } from '../models/endereco.model';
import { API_URL, ENDERECOS_ENDPOINT } from '../api/endpoints';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  constructor(private http: HttpClient) { }

  obterEnderecos(): Observable<Endereco[]> {
    return this.http.get<Endereco[]>(`${API_URL}${ENDERECOS_ENDPOINT}`);
  }

  obterEnderecoPorId(id: number): Observable<Endereco> {
    const url = `${API_URL}${ENDERECOS_ENDPOINT}/${id}`;
    return this.http.get<Endereco>(url);
  }

  criarEndereco(endereco: Endereco): Observable<Endereco> {
    return this.http.post<Endereco>(`${API_URL}${ENDERECOS_ENDPOINT}`, endereco);
  }

  atualizarEndereco(endereco: Endereco): Observable<Endereco> {
    const url = `${API_URL}${ENDERECOS_ENDPOINT}/${endereco.idendereco}`;
    return this.http.put<Endereco>(url, endereco);
  }

  excluirEndereco(id: number): Observable<any> {
    const url = `${API_URL}${ENDERECOS_ENDPOINT}/${id}`;
    return this.http.delete(url);
  }
}
