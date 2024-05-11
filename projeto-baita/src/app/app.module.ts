import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { InicioComponent } from './pages/inicio/inicio.component';
import { CamaraoEmpanadoComponent } from './pages/camarao-empanado/camarao-empanado.component';
import { LulaComponent } from './pages/lula/lula.component';
import { FrangoComponent } from './pages/frango/frango.component';
import { FrangoQueijoComponent } from './pages/frango-queijo/frango-queijo.component';
import { FrangoCheddarComponent } from './pages/frango-cheddar/frango-cheddar.component';
import { FrangoVegetaisComponent } from './pages/frango-vegetais/frango-vegetais.component';
import { FrangoCoxaComponent } from './pages/frango-coxa/frango-coxa.component';
import { PolacaComponent } from './pages/polaca/polaca.component';
import { FrangoFileComponent } from './pages/frango-file/frango-file.component';
import { FrangoSteakComponent } from './pages/frango-steak/frango-steak.component';
import { FrangoTirasComponent } from './pages/frango-tiras/frango-tiras.component';
import { IscaTilapiaComponent } from './pages/isca-tilapia/isca-tilapia.component';
import { PangasiusComponent } from './pages/pangasius/pangasius.component';
import { PeixeComponent } from './pages/peixe/peixe.component';
import { PorkitosComponent } from './pages/porkitos/porkitos.component';
import { SchnitzelComponent } from './pages/schnitzel/schnitzel.component';
import { TilapiaFileComponent } from './pages/tilapia-file/tilapia-file.component';
import { FrangoApimentadoComponent } from './pages/frango-apimentado/frango-apimentado.component';
import { CamaraoFichaComponent } from './pages/camarao-ficha/camarao-ficha.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CamaraoEmpanadoComponent,
    LulaComponent,
    FrangoComponent,
    FrangoQueijoComponent,
    FrangoCheddarComponent,
    FrangoVegetaisComponent,
    FrangoCoxaComponent,
    PolacaComponent,
    FrangoFileComponent,
    FrangoSteakComponent,
    FrangoTirasComponent,
    IscaTilapiaComponent,
    PangasiusComponent,
    PeixeComponent,
    PorkitosComponent,
    SchnitzelComponent,
    TilapiaFileComponent,
    FrangoApimentadoComponent,
    CamaraoFichaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
