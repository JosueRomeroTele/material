import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { InicioComponent } from './components/inicio/inicio.component';


import { MessageService } from "../app/service/message/message.service";
import { SharedModule } from './components/shared/shared.module';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PersonajeComponent,
    MovieDetailComponent,
    CharacterDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    SharedModule

  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
