import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlateauComponent } from './plateau/plateau.component';
import { CaseComponent } from './case/case.component';

@NgModule({
  declarations: [
    AppComponent,
    PlateauComponent,
    CaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
