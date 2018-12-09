import { CatComponent } from './cat/cat.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent }      from '../app/pokemon/pokemon.component';

const routes: Routes = [
  { path: 'pokemon', component: PokemonComponent },
  { path: 'cat', component: CatComponent }
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
