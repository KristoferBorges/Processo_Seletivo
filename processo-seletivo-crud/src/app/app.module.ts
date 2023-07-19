import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importando o FormsModule para usar o ngModel
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { TabelaComponent } from './components/tabela/tabela.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { FuncionarioService } from './services/funcionario.service';
import { EnderecoService } from './services/endereco.service';
import { CommonModule } from '@angular/common';
import { FormatarDataPipe } from './components/pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    EventosComponent,
    TabelaComponent,
    PipesComponent,
    TwoWayBindingComponent,
    FormatarDataPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [FuncionarioService, EnderecoService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
