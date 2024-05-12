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
import { FrangoFichaComponent } from './pages/frango-ficha/frango-ficha.component';
import { FrangoApimentadoFichaComponent } from './pages/frango-apimentado-ficha/frango-apimentado-ficha.component';
import { FrangoCheddarFichaComponent } from './pages/frango-cheddar-ficha/frango-cheddar-ficha.component';
import { FrangoCoxaFichaComponent } from './pages/frango-coxa-ficha/frango-coxa-ficha.component';
import { FrangoFileFichaComponent } from './pages/frango-file-ficha/frango-file-ficha.component';
import { FrangoQueijoFichaComponent } from './pages/frango-queijo-ficha/frango-queijo-ficha.component';
import { FrangoSteakFichaComponent } from './pages/frango-steak-ficha/frango-steak-ficha.component';
import { FrangoTirasFichaComponent } from './pages/frango-tiras-ficha/frango-tiras-ficha.component';
import { FrangoVegetaisFichaComponent } from './pages/frango-vegetais-ficha/frango-vegetais-ficha.component';
import { IscaTilapiaFichaComponent } from './pages/isca-tilapia-ficha/isca-tilapia-ficha.component';
import { LulaFichaComponent } from './pages/lula-ficha/lula-ficha.component';
import { PangasiusFichaComponent } from './pages/pangasius-ficha/pangasius-ficha.component';
import { PeixeFichaComponent } from './pages/peixe-ficha/peixe-ficha.component';
import { PolacaFichaComponent } from './pages/polaca-ficha/polaca-ficha.component';
import { PorkitosFichaComponent } from './pages/porkitos-ficha/porkitos-ficha.component';
import { SchnitzelFichaComponent } from './pages/schnitzel-ficha/schnitzel-ficha.component';
import { TilapiaFileFichaComponent } from './pages/tilapia-file-ficha/tilapia-file-ficha.component';

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
    CamaraoFichaComponent,
    FrangoFichaComponent,
    FrangoApimentadoFichaComponent,
    FrangoCheddarFichaComponent,
    FrangoCoxaFichaComponent,
    FrangoFileFichaComponent,
    FrangoQueijoFichaComponent,
    FrangoSteakFichaComponent,
    FrangoTirasFichaComponent,
    FrangoVegetaisFichaComponent,
    IscaTilapiaFichaComponent,
    LulaFichaComponent,
    PangasiusFichaComponent,
    PeixeFichaComponent,
    PolacaFichaComponent,
    PorkitosFichaComponent,
    SchnitzelFichaComponent,
    TilapiaFileFichaComponent
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
