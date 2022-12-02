import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {PlateauComponent} from "./plateau/plateau.component";
import {CreateGameComponent} from "./create-game/create-game.component";

const routes: Routes = [
  { path: '', component: AccueilComponent },
  {path: 'game', component: CreateGameComponent},
  { path: 'game/:id', component: PlateauComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
