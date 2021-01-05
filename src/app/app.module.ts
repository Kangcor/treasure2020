import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WaldoComponent } from './waldo/waldo.component';
import { HanoiComponent } from './hanoi/hanoi.component';
import { TesoroComponent } from './tesoro/tesoro.component';
import {FormsModule} from '@angular/forms';
import { FinalComponent } from './final/final.component';

@NgModule({
  declarations: [
    AppComponent,
    WaldoComponent,
    HanoiComponent,
    TesoroComponent,
    FinalComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
