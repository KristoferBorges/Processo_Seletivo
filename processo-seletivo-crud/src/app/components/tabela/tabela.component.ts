import { Component } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent {
  funcionarios = [
    {nome: "Ronaldo", age: 12},
    {nome: "Vasco", age: 47},
    {nome: "Tatiane", age: 41},
    {nome: "Gabriela", age: 14},
    {nome: "Katrina", age: 20},
  ]
}
