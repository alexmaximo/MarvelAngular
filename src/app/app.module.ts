import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { MarvelComponent } from './marvel/marvel.component';
import { MarvelService } from './marvel/marvel.service';

@NgModule({
  declarations: [
    AppComponent,
    MarvelComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule
  ],
  providers: [MarvelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
