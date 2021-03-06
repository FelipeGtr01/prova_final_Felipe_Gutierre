import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { CarrosComponent } from './carros/carros.component';
import { CarroDetailComponent } from './carro-detail/carro-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    CarrosComponent,
    CarroDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
