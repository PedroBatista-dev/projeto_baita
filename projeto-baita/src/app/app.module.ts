import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InicioComponent } from './pages/inicio/inicio.component';
import { CamaraoEmpanadoComponent } from './pages/camarao-empanado/camarao-empanado.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CamaraoEmpanadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
