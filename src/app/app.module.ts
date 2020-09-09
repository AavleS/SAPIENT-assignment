import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { SearchBarComponent } from './search-bar/search-bar.component';
import { SpaceListComponent } from './space-list/space-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SpaceListComponent
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
