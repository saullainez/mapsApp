import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';

import { AgmCoreModule } from '@agm/core';
import { GoogleMapsModule } from "@angular/google-maps";
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  entryComponents: [
    MapaEditarComponent
  ],
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyChFzhB4wFwzGBPBuNIW2__v2W80on_hcY'
    }),
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
