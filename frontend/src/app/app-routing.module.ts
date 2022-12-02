import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {PlateauComponent} from "./plateau/plateau.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {CreateGameComponent} from "./create-game/create-game.component";
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  {path: 'game', component: CreateGameComponent},
  {path: 'contact', component: ContactComponent},
  { path: 'game/:id', component: PlateauComponent },
  {path: 'login', component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
