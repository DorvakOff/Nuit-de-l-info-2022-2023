import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlateauComponent } from './plateau/plateau.component';
import { CaseComponent } from './case/case.component';
import { CarteComponent } from './carte/carte.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DesComponent } from './des/des.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {LoginPageComponent} from "./login-page/login-page.component";
import {BusyIndicatorComponent} from "./busy-indicator/busy-indicator.component";
import {CreateGameComponent} from "./create-game/create-game.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    BusyIndicatorComponent,
    PlateauComponent,
    CaseComponent,
    CarteComponent,
    AccueilComponent,
    NavbarComponent,
    FooterComponent,
    DesComponent,
    CreateGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
