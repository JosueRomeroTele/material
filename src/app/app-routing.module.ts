import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';

const routes: Routes = [
  {path:'',redirectTo:'inicio',pathMatch:'full'},
  {path:'movie/details',component:MovieDetailComponent},
  {path:'character/:id',component:PersonajeComponent},
  {path:'characterDetail/:id',component:CharacterDetailComponent},
  {path:'inicio', component: InicioComponent},
  {path:'**',redirectTo:'inicio',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
