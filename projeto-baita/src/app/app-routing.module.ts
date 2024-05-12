import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'camarao-empanado', component: CamaraoEmpanadoComponent },
  { path: 'lula', component: LulaComponent },
  { path: 'frango', component: FrangoComponent },
  { path: 'frango-queijo', component: FrangoQueijoComponent },
  { path: 'frango-cheddar', component: FrangoCheddarComponent },
  { path: 'frango-vegetais', component: FrangoVegetaisComponent },
  { path: 'frango-coxa', component: FrangoCoxaComponent },
  { path: 'polaca', component: PolacaComponent },
  { path: 'frango-file', component: FrangoFileComponent },
  { path: 'frango-steak', component: FrangoSteakComponent },
  { path: 'frango-tiras', component: FrangoTirasComponent },
  { path: 'isca-tilapia', component: IscaTilapiaComponent },
  { path: 'pangasius', component: PangasiusComponent },
  { path: 'peixe', component: PeixeComponent },
  { path: 'porkitos', component: PorkitosComponent },
  { path: 'schnitzel', component: SchnitzelComponent },
  { path: 'tilapia-file', component: TilapiaFileComponent },
  { path: 'frango-apimentado', component: FrangoApimentadoComponent },
  { path: 'camarao-ficha', component: CamaraoFichaComponent },
  { path: 'frango-ficha', component: FrangoFichaComponent },
  { path: 'frango-apimentado-ficha', component: FrangoApimentadoFichaComponent },
  { path: 'frango-cheddar-ficha', component: FrangoCheddarFichaComponent },
  { path: 'frango-coxa-ficha', component: FrangoCoxaFichaComponent },
  { path: 'frango-file-ficha', component: FrangoFileFichaComponent },
  { path: 'frango-queijo-ficha', component: FrangoQueijoFichaComponent },
  { path: 'frango-steak-ficha', component: FrangoSteakFichaComponent },
  { path: 'frango-tiras-ficha', component: FrangoTirasFichaComponent },
  { path: 'frango-vegetais-ficha', component: FrangoVegetaisFichaComponent },
  { path: 'isca-tilapia-ficha', component: IscaTilapiaFichaComponent },
  { path: 'lula-ficha', component: LulaFichaComponent },
  { path: 'pangasius-ficha', component: PangasiusFichaComponent },
  { path: 'peixe-ficha', component: PeixeFichaComponent },
  { path: 'polaca-ficha', component: PolacaFichaComponent },
  { path: 'porkitos-ficha', component: PorkitosFichaComponent },
  { path: 'schnitzel-ficha', component: SchnitzelFichaComponent },
  { path: 'tilapia-file-ficha', component: TilapiaFileFichaComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
