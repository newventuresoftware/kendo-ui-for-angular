import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
