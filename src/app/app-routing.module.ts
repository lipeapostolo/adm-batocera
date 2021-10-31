import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaGameComponent } from './lista-game/lista-game.component';
import { ListaPlataformaComponent } from './lista-plataforma/lista-plataforma.component';
import { TorneioComponent } from './torneio/torneio.component';

const routes: Routes = [
  { path: '', component: ListaPlataformaComponent },
  { path: 'home', component: ListaPlataformaComponent },
  { path: 'Plataforma', component: ListaGameComponent },
  { path: 'torneio', component: TorneioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
