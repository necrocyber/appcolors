import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { ClipboardComponent } from './components/clipboard/clipboard.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ClipboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
