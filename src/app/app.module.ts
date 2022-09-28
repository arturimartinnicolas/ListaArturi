import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListaComponent } from './components/lista/lista.component';

import { LOCALE_ID } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
   {
    provide: LOCALE_ID,
    useValue: 'es-AR',
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
