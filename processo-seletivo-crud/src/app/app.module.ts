import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { TabelaComponent } from './components/tabela/tabela.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    EventosComponent,
    TabelaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
