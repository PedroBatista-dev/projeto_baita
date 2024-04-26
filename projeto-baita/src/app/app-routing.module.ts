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
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
