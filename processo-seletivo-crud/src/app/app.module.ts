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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    EventosComponent,
    TabelaComponent,
    PipesComponent,
    TwoWayBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }